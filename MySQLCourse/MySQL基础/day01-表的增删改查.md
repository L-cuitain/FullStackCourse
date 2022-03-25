## 数据库概述


### 数据库的作用

* 可以持久化数据到本地
* 结构化查询

### 数据库的常见概念

* DB: 数据库，存储数据的容器
* DBMS: 数据库管理系统，又称为数据库软件或数据库产品，用于创建或管理DB
* SQL: 结构化查询语言，用于和数据库同学的语言，不是某个数据库软件特有的，而是几乎所有的主流数据库软件通用的语言

### 数据库存储数据的特点

* 数据存放到表中，然后表再存放到库中
* 一个库中可以有多张表，每张表具有唯一的表名用来标识自己
* 表中有一个或多个列，列又称为“字段”，相当于java中的“属性”
* 表中的每一行数据，相当于java中的“对象”

### 常见的数据库管理系统

mysql、oracle、db2、sqlserver

## MySQL介绍


### mysql的优点

* 开源、免费、成本低
* 性能高、移植性好
* 体积小、便于安装

### mysql服务的启动和停止

* 方式一: 通过命令行
  net start 服务名
  net stop 服务名
* 方式二: 计算机--> 右击--> 管理--> 服务

### mysql服务的登录和退出

* 登录: mysql [-h主机名 -P端口号] -u用户名 -p密码
* 退出: exit;或ctrl+c

## MySQL中关于表的操作

### 创建表

```sql
/*
 # 表的创建
   语法: create table 表名 (
    字段名 字段类型 [约束],
    ...
    字段名 字段类型 [约束],
    字段名 字段类型 [约束]
   );
*/

-- 例:
CREATE TABLE test.t_stuinfo (
id INT ,# int代表的是整数
stuname VARCHAR(20), -- varchar 相当于js中的字符串，20代表字符串的长度
birthday DATETIME , --  日期时间
gender CHAR -- 字符就是一个字符(a b c '中' '男' '女') 字符串 大于等于2个字符的叫字符串
);
```

### 查看表(查看表结构、查看表数据)
```sql
/*
  # 查看表结构
  desc 表名
  show columns from 表名
  describe 表名
  show create table 表名
*/

-- 例
desc student;
show columns from student;
describe student;
show create table student;

/*
    # 查看表数据
    select * (代表所有字段) from 表名;
*/

-- 例
select * from student;

```

### 修改表
```sql
/*
    alter table 表名 修改选项

    修改选项:
    # 添加字段
    add  新字段名 数据类型 约束条件 first|alter已存在的字段名
    # 修改字段数据类型
    modify 字段名 数据类型
    # 删除字段
    drop 字段名
    # 修改字段名称
    change 旧字段名 新字段名 新数据类型
    # 修改表名
    rename to 新表名
*/

-- 例
-- 添加字段
alter table student add column name varchar(10) first;

-- 修改字段数据类型
alter table student modify name varchar(20);

-- 删除字段
alter table student drop column name;

-- 修改字段名称
alter table student change name username varchar(10);

-- 修改表名
alter table student rename to emp;
```

### 删除表
```sql
/*
    # 删除表
    drop table 表名
    # 清空表数据
    truncate table 表名
*/

-- 例
-- 删除表
drop table user;

-- 清空表数据
truncate table user;

```
