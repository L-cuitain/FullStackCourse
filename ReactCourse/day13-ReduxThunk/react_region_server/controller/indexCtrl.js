//引入数据库文件
const { getProvince , getCity , getCounty } = require('../models/provinceModel');


//获取省级列表
module.exports.getProvinceCtrl = (req,res) => {
    //获取数据库发送的数据
    getProvince(function(results){
        //发送数据
        res.send({
            code: 200,
            message: '省级列表获取成功',
            PList: results
        })
    })
}

//获取市级列表
module.exports.getCityCtrl = (req,res) => {
    //获取传入的id
    const { cid } = req.params;
    // console.log(cid);

    //获取数据库发送的数据
    getCity(cid,function(results){
        //发送数据
        res.send({
            code: 200,
            message: '市级列表获取成功',
            CList: results
        })
    })
}


//获取县级列表
module.exports.getCountyCtrl = (req,res) => {
    //获取传入的id
    const { tid } = req.params;
    // console.log(tid);

    //获取数据库发送的数据
    getCounty(tid,function(results){
        console.log(results);
        //发送数据
        res.send({
            code: 200,
            message: '区县列表获取成功',
            TList: results
        })
    })
}
