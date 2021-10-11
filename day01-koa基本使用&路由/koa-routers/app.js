//引入koa
const Koa = require('koa');

//实例化Koa
const app = new Koa();

//配置路由
const Router = require('koa-router');

//调用Router构造函数 生成路由实例
// const router = new Router();

//使用路由实例 请求方法 接收前端请求 并返回响应
// router.get('/aaa', async (ctx,next) => {
//     ctx.body = "路由基本使用";
// })

//导入router 挂载到app上
const router = require('./routes');

//启动路由
app.use(router.routes()).use(router.allowedMethods());


//指定端口 监听
app.listen(3000,() => {
    console.log("3000端口打开");
});