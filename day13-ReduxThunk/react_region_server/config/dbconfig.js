//连接mysql
const mysql = require('mysql');

//创建数据库连接池
const connection = mysql.createConnection({
    //支持多条sql语句
    multipleStatements: true,
    //数据库连接池 有多少连接
    connecttionLimit : 20,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'react_region'
});

//导出数据库
module.exports = connection;

