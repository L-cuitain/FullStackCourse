//引入koa-router
const Router = require('koa-router');

//生成路由并设置前缀
const ARouter = new Router({
    //设置前缀
    prefix: '/a'
})

//接收请求方法下的请求 并处理响应内容
ARouter.get('/',async (ctx,next) => {
    //编写内容
    ctx.body = 'a路由内容'
})

//导出模块
module.exports = ARouter;