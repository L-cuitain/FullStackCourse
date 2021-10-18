//引入mysql
const mysql = require('mysql');

//设置连接参数
let options = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nuxt_koa_user',
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

