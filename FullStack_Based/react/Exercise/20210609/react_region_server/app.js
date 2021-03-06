//导入包
//导入express框架
const express = require('express');

//导入路由模块
const regionRouter = require('./routers/regionRouter');

//设置包
const app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });


//处理请求
app.use(regionRouter);

//监听端口
app.listen(8080);
console.log('Listen on port 8080');