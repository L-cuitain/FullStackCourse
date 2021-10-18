//引入koa-router
const Router = require('koa-router');

//创建router实例
const router = new Router();

//导入路由
const ARouter = require('./ARouter');
const BRouter = require('./BRouter');

//将引入的路由 挂载到router上
router.use(ARouter.routes() , ARouter.allowedMethods());
router.use(BRouter.routes() , BRouter.allowedMethods());

//导出router
module.exports = router;