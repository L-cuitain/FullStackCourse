# 数据类型

## 数值型(整数 , 小数:浮点数 定点数)
## 整数
```sql
-- 数据类型   解释     取值范围    占用空间
-- tinyint    微整形    0-255      1字节  无符号 -1  1
-- smallint   小整形    0-6535     2
-- Mediumint  中整形               3
-- int        整形                 4
-- bigint     大整形               8

--删除表
create table numbers;

-- 创建表
create table numbersm(
    numtiny tinyint UNSIGNED,
    numint  int(4)  ZEROFILL
);

-- 0-255 , 为-128,127
insert into numbers(numtiny,numint) values(230,2123321);
insert into numbers(numtiny,numint) values(253,31);


-- int(10) 代表显示数字多少位  在数字类型中  显示数字的多少只和数字的大小有关
-- 如果展示数字为 0001 , 而运行的数字为 1 , 则需要 zerofill 用 0 填充
-- 只要为 zerofill , 必然是 unsigned
```

## 小数
```sql
-- M代表整个数字位数 D代表小数部分位数
-- float(M,D) 浮点数
-- double 双浮点数(双精度)
-- DECIMAL 定点数(比较精确)
create table floats(
    numfl FLOAT(5,3),
    numdo DOUBLE(5,3),
    numde DECIMAL(5,3)
);

INSERT INTO floats VALUES(12.345,12.345,14.345);
INSERT INTO floats VALUES(12.3457,12.3457,14.3457);
INSERT INTO floats VALUES(99.999,99.999,99.999);
desc floats;
```

## 字符型(较短的字符串 char varchar 较长的字符串 text blob)
```sql
-- char(M)    短的字符串  M代表字符串的长度  (10)   如果里面存入5个  字符串长度规定10 依然占据 10个字符的空间     执行效率高一些  
-- varchar(M)   短的字符串   M代表字符串的长度   (10)  可变    如果里面存入5个    字符串长度规定10  根据具体的内容可以给予合适的空间   执行效率低一些
```

## 日期型
```sql
-- date 日期
-- time 时间
-- datetime 日期时间
-- timestamp 时间戳
-- year 年

create table dates(
    ddate date,
    dtime time,
    ddatetime datetime,
    dtimestamp TIMESTAMP,
    dyear year
);

INSERT INTO dates VALUES(NOW(),NOW(),NOW(),NOW(),NOW());
INSERT INTO dates VALUES('2020-07-03',null,null,NOW(),null);
desc dates;
SHOW VARIABLES like '%time_zone%'
```


## 枚举 enum
```sql
CREATE TABLE enums(
el ENUM('a','b','c')
);

INSERT INTO enums VALUES('a');
INSERT INTO enums VALUES('b');
INSERT INTO enums VALUES('e');
SELECT * from enums;
```


## 集合 SET
```sql
CREATE TABLE set_list(
cs SET('a','b','c','d')
);

INSERT into set_list VALUES('a');
INSERT into set_list VALUES('a,b');
INSERT into set_list VALUES('a,b,c');
SELECT * from set_list;
```

## 约束
```sql
-- not null：非空约束，指定某列不为空
create table temp(        
id int not null,        
name varchar(255) not null default ‘abc’,        
sex char null
)



-- unique： 唯一约束，指定某列和几列组合的数据不能重复
create table temp (        
id int not null,        
name varchar(25),        
password varchar(16),
constraint uk_name_pwd unique(name, password)
);



-- primary key：主键约束，指定某列的数据不能重复、唯一
---- 第一种
create table temp(    
id int primary key,    
name varchar(25)
);  

---- 第二种
create table temp2(    
id int not null,    
name varchar(25),    
pwd varchar(15),    
constraint pk_temp_id primary key(id)
);  


-- foreign key：外键，指定该列记录属于主表中的一条记录，参照另一条数据
---- 主表
create table classes(        
id int auto_increment primary key,        
name varchar(20)
);

---- 从表
create table student(        
id int auto_increment,        
name varchar(22),        
constraint pk_id primary key(id),        
classes_id int references classes(id)
);  



-- check：检查，指定一个表达式，用于检验指定数据
create table temp(        
id int auto_increment,        
name varchar(20),        
age int,        
primary key(id),
check(age > 20)
);

```