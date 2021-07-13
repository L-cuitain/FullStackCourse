//引入数据库连接池
const pool = require('../config/dbconfig');

//获取省级列表
module.exports.getProvince = (callback) => {
    //查询数据库数据
    pool.query('select id , code , name from fa_address_province',function(error,results){
        if(error) throw error;
        callback(results);
    })
}

//获取市级列表
module.exports.getCity = (Cid,callback) => {
    //查询数据库语句
    pool.query(`select id , code , name from fa_address_city where provinceCode='${Cid}'`,function(error,results){
        if(error) throw error;
        callback(results);
    })
}

//获取区县列表
module.exports.getCounty = (Tid,callback) => {
    //查询数据库语句
    pool.query(`select id , code , name from fa_address_town where cityCode='${Tid}'`,function(error,results){
        if(error) throw error;
        callback(results);
    })
}

