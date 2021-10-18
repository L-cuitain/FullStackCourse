# 模板引擎 ejs

## 安装
* 安装koa模板使用中间件
```
npm i --save koa-views

yarn add koa-views
```

* 安装ejs模板引擎
```
npm i --save ejs

yarn add ejs
```

## 引入
```js
//引入koa-views
const views = require('koa-views');
```

## 加载模板引擎
```js
app.use(views(path.join(__dirname,'./views'),{
    extension: 'ejs'
}))
```

## 渲染页面
```js
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
```

views/index.ejs
```
<h2><%= title %></h2>
<% if (user) { %>
    <h3><%= user.name %></h3>
<% } %>
```


# 文件上传
使用`koa-body`可以代替`koa-bodyparser`(进行post请求) & `koa-multer`(图片上传),来上传文件

`koa-body`主要依赖
```
"co-body": "^5.1.1",
"formidable": "^1.1.1"
```

## koa-body基本参数
* `patchNode`(Boolean):将请求体加到原生NodeJS的`ctx.req`中,default:false
* `patchKoa`(Boolean):将请求体加到Koa的`ctx.request`中,default:true
* `jsonLimit`(String/Integer):JSON数据体的大小限制,default:1mb
* `formLimit`(String/Integer):限制表单请求体的大小,default:56kb
* `textLimit`(String/Integer):限制`text body`的大小,default:56kb
* `encoding`(String):表单的默认编码,default:utf-8
* `multipart`(Boolean):是否支持`multpart-formdata`的表单,default:false
* `urlencoded`(Boolean):是否支持`urlencoded`的表单,default:true
* `text`(Boolean):是否解析`text/plain`的表单,default:true
* `json`(Boolean):是否解析`json`请求体,default:true
* `jsonStrict`(Boolean):是否使用json严格模式,`true`会只处理数组和对象,default:true
* `formidable`(Object):配置更多的关于`multipart`的选项,default:{}
* `onError`(Function):错误处理,default:function(){}
* `stict`(Boolean):严格模式启用后不会解析 `GET`,`HEAD`,`DELETE`请求

## formidable相关配置参数
* `maxFields`(Integer):限制字段的数量,default:1000
* `maxFieldsSize`(Integer):限制字段的最大大小,default:2*1024*1024
* `uploadDir`(String):文件上传的文件夹,default:os.tmpDir()
* `keepExtensions`(Boolean):保留原来的文件后缀,default:false
* `hash`(String):如果要计算文件的`hash`,则可以选择`md5/sha1`,default:false
* `multipart`(Boolean):是否支持多文件上传,default:true
* `onFileBegin`(Function):文件上传前的一些设置操作,default:function(name,file){}


## 基本使用

### 安装
```
npm i koa-body

yarn add koa-body
```

### 引入
```js
//引入koa-body
const koaBody = require('koa-body');
```

### 配置
```js
//配置
app.use(koaBody({
    //是否支持 multipart-formdata 的表单
    multipart: true,
    formidable: {
        //设置上传文件大小最大限制,默认2M
        maxFileSize: 200 * 1024 * 1024
    }
}))
```

### 上传接口
routes/index.js
```js
//引入path
const path = require('path');

//引入fs
const fs = require('fs');

//获取上传文件,并存储到服务器
router.post('/upload', async (ctx,next) => {
    // console.log(ctx.request.files);
    //获取上传文件
    const file = ctx.request.files.myfile.path;
    console.log(file);
    //创建可读流
    const reader = fs.createReadStream(file);
    //创建可写流
    const upStream = fs.createWriteStream(path.join(__dirname,`../upload/${ctx.request.files.myfile.name}`));
    //可读流通过管道写入可写流
    reader.pipe(upStream);

    //返回
    return ctx.body = '上传成功';
})
```

### 页面
```html
<form enctype="multipart/form-data" action="/upload" method="post">
    <input type="file" name="myfile">
    <input type="submit">
</form>
```

## 获取文件上传信息
* 通过`ctx.request.files`获取文件上传信息
* 获取表单字段,则在`ctx.request.body`中获取(由co-body决定)
```js
router.get('/',async (ctx) => {
    await ctx.render('index');
})

router.post('/getFilesInfo', async (ctx) => {
    console.log(ctx.request.files);
    console.log(ctx.request.body);
})
```