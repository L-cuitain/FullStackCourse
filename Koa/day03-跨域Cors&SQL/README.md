# 跨域资源共享(CORS)
* CORS是一种机制,它使用额外的HTTP头告诉浏览器 让运行在一个`origin(domain)`上的Web应用被准许访问来自不同源服务器上的指定资源
* 当一个资源从与该资源本身所在的服务器`不同的域`,`协议`或`端口`请求一个资源时,资源会发起一个跨域HTTP请求
* CORS有`简单请求`和`复杂请求`
* [不同种跨域方式](https://segmentfault.com/a/1190000022398875)

## Koa中实现方式
1. 安装`koa2-cors`
```
npm i koa2-cors

yarn add koa2-cors
```

2. `app.js`中引入
```js
const cors = require('koa2-cors');
```

3. 挂载cors
```js
//方式一: 基本格式
app.use(cors());

//方式二: 自定义跨域设置
app.use(cors({
    //设置允许来自指定域名请求
    origin: function(ctx){
        //判断是否为接收的url
        if(ctx.url === '/getForm'){
            //允许来自所有域名请求
            return '*';
        }
        //只允许http://localhost:3000这个域名的请求
        return 'http://localhost:3000'
    },
    //指定本次预检请求的有效期,单位为秒
    maxAge: 5,
    //是否允许发送cookie
    credentials: true,
    //设置所允许的HTTP请求方式
    allowMethods: ['GET','POST','PUT','DELETE','OPTIONS'],
    //设置服务器支持的所有头
    allowHeaders: ['Content-Type','Authorization','Accept'],
    //设置获取其他子当以字串
    exposeHeaders: ['www-Authenticate','Server-Authorization']
}))

//方式三: 自己实现
app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});
```



# 数据库连接
在Koa中连接数据库

## 实现过程
1. 安装`mysql`
```
npm i mysql

yarn add mysql
```

2. 在config文件夹中配置数据库连接池
```js
//引入mysql
const mysql = require('mysql');

//设置连接参数
let options = {
    host: '',
    user: '',
    password: '',
    database: '',
    multipleStatements: true  //启用多线程
};

var pool = mysql.createPool(options);

exports.query = function(sql,values){
    return new Promise((resolve,reject) => {
        pool.getConnection(function(err,connection){
            if(err){
                reject(err);
                console.log(err,'数据库连接失败');
                resolve({
                    status: 500,
                });
            }else{
                connection.query(sql,values,(err,results) => {
                    if(err){
                        reject(err);
                        resolve({
                            status: 400
                        });
                    }else{
                        connection.release();
                        resolve({
                            status: 200,
                            results
                        })
                    }
                })
            }
        })
    })
}
```

3. 在将要发起请求的文件中引入配置文件
```js
//创建实例
const db = require('./config/dbconfig');
```

4. 调用实例的query方法
```js
const result = await db.query(sql,value);
```