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