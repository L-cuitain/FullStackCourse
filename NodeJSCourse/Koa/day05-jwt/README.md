# JWT鉴权
JWT(Json Web Token),它定义了一种用于简洁,自包含的用于通信双方以JSON对象的形式安全传递信息的方法,JWT可以使用HMAC算法或RSA的公钥密钥进行签名

## 基本流程
* 用户登录时,输入用户名和密码后请求服务器接口,服务器验证正确后,生成token并返回给前端
* 前端存储token,并在后面的请求把token带在请求头中传给服务器
* 服务器验证token有效,返回正确数据
* 服务器验证无效,返回401

## 使用库
* jsonwebtoken 生成token密钥
```
npm i jsonwebtoken

yarn add jsonwebtoken
```

* koa-jwt 对jsonwebtoken进行封装
```
npm i koa-jwt

yarn add koa-jwt
```

## 生成token
调用jsonwebtoken的sign()方法生成token
return:
* 载荷:用于编码后存储在token中的数据,也是验证token后可以拿到的数据
* 密钥:自定义,验证时需要相同的密钥才能解码
* options:可以设置token的过期时间
```js
//引入jwt
const jwt = require('jsonwebtoken');

//创建token
const token = jwt.sign({
    name,
    password
},'my_token',{ expiresIn: '1h' });
```

## 获取token
* koa_jwt 接收请求 发送token
```js
//引入jwt
const jwt = require('jsonwebtoken');

//接收post请求
router.post('/login', async (ctx) => {
//判断用户名和密码
    if(name === '张三' && password === '123456'){
        //创建token
        const token = jwt.sign({
            name,
            password
        },'my_token',{ expiresIn: '1h' });

        return ctx.body = {
            code: 200,
            token: token,
            msg: '登录成功'
        }
    }else{
        return ctx.body = {
            code: 500,
            token: null,
            msg: '用户名或密码错误'
        }
    }
})    
```

* koa_nuxt_jwt 发送请求 获取token 存入本地
```js
//发起请求 将获取的token存入localStorage中
submit(){
      axios.post('http://localhost:3001/login',{
        name: '张三',
        password: '123456'
      }).then(({ data }) => {
        if(data.code === 200){
          localStorage.setItem('token',data.token);
          localStorage.setItem('token_exp',new Date().getTime());
          this.$router.push('/');
        }else{
          console.log(data.msg);
        }
      })
    }
```

### 对获取token请求进行拦截并存入header中
* koa_nuxt_jwt: plugins/axios.js
```js
//引入axios
import axios from 'axios';

//拦截axios 将获取的token存入headers中
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.common['Authorization'] = 'Bearer' + token;
    console.log(config);
    return config;
})
```

* koa_jwt:再次发起请求 返回响应则看到token被添加到header中


## 验证token
通过中间件[koa-jwt](https://www.npmjs.com/package/koa-jwt)验证密钥
如果请求时没有token或token过期,则会返回401
```js
//引入koa-jwt
const koajwt = require('koa-jwt');

//token验证错误处理
app.use((ctx,next) => {
    return next().catch((err) => {
        if(err.status === 401){
            ctx.status = 401;
            ctx.body = 'Protected resource, use Authorization header to get access\n'
        }else{
            throw err;
        }
    })
})

//unless指定哪些URL不需要进行token验证
app.use(koajwt({ secret: 'my_token' }).unless({ path: [/^\/login/] }));
```
koajwt中`secret`名称需要与创建token中的`jwt.sign(payload, secretOrPrivateKey, [options, callback])`第二个参数`secretOrPrivateKey`对应

