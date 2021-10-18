# 静态资源加载
一个http请求访问web服务静态资源,一般响应结果有三种情况:
* 访问文本 如:js css png jpg gif
* 访问静态目录
* 找不到资源 抛出404状态码

## 设置静态目录
1. 安装`koa-static`
```
npm i koa-static

yarn add koa-static
```

2. `app.js`中设置静态目录
```js
//引入path
const path = require('path');

//引入koa-static
const static = require('koa-static');

//设置静态资源目录的入口文件
const staticPath = './public';

//挂载
app.use(static(
    path.join(__dirname,staticPath)
))
```

3. 启动后自动访问`/public/index.html`文件



# 请求参数

## GET请求参数获取
获取GET请求数据有两种途径:
1. 从上下文中直接获取
* 请求对象`ctx.query`
```js
app.use( async (ctx) => {
    //从上下文中直接获取
    let ctx_query = ctx.query;
    
    //填充页面
    ctx.body = {
        ctx_query
    }
})

//return
// [Object: null prototype] {
//   userName: '123',
//   nickName: '421',
//   email: '21412@qq.com'
// }
```


* 请求字符串`ctx.querystring`
```js
app.use( async (ctx) => {
    //从上下文中直接获取
    let ctx_querystring = ctx.querystring;
    
    //填充页面
    ctx.body = {
        ctx_querystring
    }
})

//return
//userName=123&nickName=421&email=21412%40qq.com
```

2. 从上下文的request对象中获取
* 请求对象`ctx.request.query`
* 请求字符串`ctx.request.querystring`

## POST请求参数获取
1. 安装中间件`koa-bodyparser`
```
npm i koa-bodyparser

yarn add koa-bodyparser
```

2. 挂载中间件
```js
app.use(bodyParser());
```

3. 获取POST请求参数
```js
app.use(async (ctx) => {
    //判断请求路径
    if(ctx.url === '/getForm' && ctx.method==='POST'){
        //获取请求参数
        const postData = ctx.request.body;
        console.log(postData);
        ctx.body = postData;
    }
})

//return
//{ userName: '1234', nickName: '421', email: '21412@qq.com' }
```
