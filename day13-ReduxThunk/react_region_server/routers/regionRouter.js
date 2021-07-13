//导入express
const express = require('express');
//创建路由
const regionRouter = express.Router();

//引入controller文件
const { getProvinceCtrl , getCityCtrl , getCountyCtrl } = require('../controller/indexCtrl');

//一级: 省
regionRouter.get('/getProvince' , getProvinceCtrl);



//二级: 市
regionRouter.get('/getCity/:cid' , getCityCtrl);
//三级: 县
regionRouter.get('/getCounty/:tid' , getCountyCtrl);

//导出路由
module.exports = regionRouter;