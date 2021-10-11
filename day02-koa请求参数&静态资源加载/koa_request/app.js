//引入koa
const Koa = require('koa');

//创建koa实例
const app = new Koa();

//引入path
const path = require('path');

//引入koa-static
const static = require('koa-static');

//设置静态资源目录的入口文件
const staticPath = './public';

//挂载
app.use(static(
    path.join(__dirname, staticPath)
))


//Get请求

//请求对象 ctx.query
// app.use(async (ctx) => {
//     //从上下文中直接获取
//     let ctx_query = ctx.query;
//     console.log(ctx_query);
//     //填充页面
//     ctx.body = {
//         ctx_query
//     }
// })

//请求字符串 ctx.querystring
// app.use( async (ctx) => {
//     console.log(ctx);
//     //从上下文中直接获取
//     let ctx_querystring = ctx.request.querystring;
//     console.log(ctx_querystring);
//     //填充页面
//     ctx.body = {
//         ctx_querystring
//     }
// })


//POST请求

//引入koa-bodyparser
const bodyParser = require('koa-bodyparser');

//使用ctx.body解析中间件
app.use(bodyParser());

//获取请求
app.use(async (ctx) => {
    //判断请求路径
    if(ctx.url === '/getForm' && ctx.method==='POST'){
        //获取请求参数
        const postData = ctx.request.body;
        console.log(postData);
        ctx.body = postData;
    }
})


//设置端口
app.listen(3000, () => {
    console.log("http://localhost:3000");
})