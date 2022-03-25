//引入koa
const Koa = require('koa');

//引入koa-views
const views = require('koa-views');

//引入path
const path = require('path');

//创建Koa实例对象
const app = new Koa();

//加载模板引擎
app.use(views(path.join(__dirname,'./views'),{
    extension: 'ejs'
}))


//渲染页面
const router = require('koa-router')();

router.get('/', async (ctx,next) => {
    await ctx.render('index',{
        title: 'Hello',
        user: {
            name: '张三'
        }
    })
})

//启动路由
app.use(router.routes()).use(router.allowedMethods());

//监听指定端口 开启服务
app.listen(3000,() => {
    console.log('http://localhost:3000');
})