//引入koa
const Koa = require('koa');

//创建koa实例
const app = new Koa();

//引入path
const path = require('path');

//引入koa-static
const static = require('koa-static');

//引入koa-body
const koaBody = require('koa-body');

//引入koa-router
const router = require('./routes');

//设置默认路径
app.use(static(path.join(__dirname,'/public')))

//配置
app.use(koaBody({
    //是否支持 multipart-formdata 的表单
    multipart: true,
    formidable: {
        //设置上传文件大小最大限制,默认2M
        maxFileSize: 200 * 1024 * 1024
    }
}))


//实例化router
app.use(router.routes()).use(router.allowedMethods());


//监听指定端口 开启服务
app.listen(3000,() => {
    console.log('http://localhost:3000');
})