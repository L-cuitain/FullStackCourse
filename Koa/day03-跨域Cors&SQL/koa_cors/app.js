//引入koa
const Koa = require('koa');

//创建koa实例
const app = new Koa();

//引入koa2-cores
const cors = require('koa2-cors');

//挂载cors
// app.use(cors());

//挂载cors(添加配置)
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

//自己实现跨域
// app.use(async (ctx, next)=> {
//     ctx.set('Access-Control-Allow-Origin', '*');
//     ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     if (ctx.method == 'OPTIONS') {
//       ctx.body = 200; 
//     } else {
//       await next();
//     }
//   });


//引入中间件
const bodyParser = require('koa-bodyparser');

//挂载中间件
app.use(bodyParser());

//引入数据库连接池
const db = require('./config/dbconfig');

//获取请求
app.use(async (ctx) => {
    //判断请求地址和请求方式
    if(ctx.url === "/getForm" && ctx.method === 'POST'){
        //获取请求参数
        const postData = ctx.request.body;
        //将请求参数存入数据库中
        const result = await db.query(`insert into user(username, nickname, email) VALUES ('${postData.username}','${postData.nickname}','${postData.email}')`);
        ctx.body = result;
    }
})

//指定端口
app.listen(8585,() => {
    console.log("http://localhost:8585");
})