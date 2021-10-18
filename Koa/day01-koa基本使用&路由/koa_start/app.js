//导入koa包
const Koa = require('koa');

//调用koa构造函数 实例化koa实例
const app = new Koa();

//给浏览器返回响应
app.use(async ctx => {
    console.log(ctx);
    //响应给浏览器
    ctx.body = "hello koa"
})

//指定端口 监听
app.listen(3000,() => {
    console.log("3000端口打开");
});