# Koa
基于NodeJS下一代Web框架

## 特点
* 没有回调地狱
* 通过try/catch处理错误
* 不同于express,不提供便携设施
* 对中间件依赖减少

## Koa与Exporess的区别
* Koa皆在`修复和替换节点`,而Express皆在`增加节点`
* Koa使用Promise和异步摆脱回调地狱,并简化处理
* Koa暴露`ctx.request`和`ctx.response`对象,而不是Node的req和res对象
* koa可视为NodeJS的http模块的抽象,,其中Express是NodeJS的应用程序框架

## 使用
初始化package.json
```
npm init -y
```

下载koa包
```
npm i koa

yarn add koa
```

创建js文件 编写基础配置
```js
//导入koa包
const Koa = require('koa');

//调用koa构造函数 实例化koa实例
const app = new Koa();

//指定端口 监听
app.listen(3000,() => {
    console.log("3000端口打开");
});
```

### 返回响应
使用koa实例调用use中间件
```js
app.use(async ctx => {
    console.log(ctx);
    //响应给浏览器
    ctx.body = "hello koa"
})
```

### 上下文&请求&响应
每个中间件都接受一个koa的Context对象(上下文),该对象封装了一个传入的http消息,并对该消息进行了相应的响应
ctx通常用作上下文对象的参数名称
```js
app.use(async (ctx, next) => { 
  await next();

  ctx.request //koa 的 Request 对象.
  ctx.response //koa 的 Response 对象.
 });
```


## 路由
使用koa-router路由中间件来配置路由

步骤:
1. 安装koa-router中间件
```
npm i koa-router

yarn add koa-router
```

2. 导入koa-router中间件
```js
const Router = require('koa-router');
```

3. 使用`new`来调用返回的`Router`构造函数生成路由实例
```js
const router = new Router();
```

4. 使用路由实例接收前端请求,并处理
```js
router.get('/路由标识符', async (ctx,next) => {
    ctx.body = "路由基本使用";
})
```

5. 启动路由
```js
app.use(router.routes());
```


### 子路由
步骤:
1. `/routes`文件夹中三个文件 `index.js`,`ARouter.js`,`BRouter.js`

2. `ARouter.js`

## 请求参数

### GET请求参数获取

### POST请求参数获取