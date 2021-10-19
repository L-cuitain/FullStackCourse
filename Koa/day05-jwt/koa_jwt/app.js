//引入koa
const Koa = require('koa');

//创建koa实例
const app = new Koa();

//引入路由
const router = require('koa-router')();

//引入jwt
const jwt = require('jsonwebtoken');

//引入koa-jwt
const koajwt = require('koa-jwt');

//引入koa-bodyparser
const bodyParser = require('koa-bodyparser');

//引入koa-cors
const cors = require('koa2-cors');


//使用ctx.body解析中间件
app.use(bodyParser());

app.use(cors());

//登录接口
router.post('/login', async (ctx) => {
    const { name , password } = ctx.request.body;

    if(!name || !password){
        return ctx.body = {
            code: 500,
            data: null,
            msg: '参数不合法'
        }
    }

    //判断用户名和密码
    if(name === '张三' && password === '123456'){
        //创建token
        const token = jwt.sign({
            name,
            password
        },'my_token',{ expiresIn: '1h' });

        // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi5byg5LiJIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2MzQ1NjI5NTUsImV4cCI6MTYzNDU2NjU1NX0.8LvcSFR4eTajPSJZR78XCVrzthW4iiVjCPbEnMuBdv0",
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

router.get('/user', async (ctx) => {
    ctx.body={
      code: 200,
      user: {name: '张三' , password: '123456'},
      msg: '用户请求成功'  
    }
})


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

//挂载路由
app.use(router.routes()).use(router.allowedMethods());

//监听指定端口 开启服务
app.listen(3001,() => {
    console.log('http://localhost:3001');
})