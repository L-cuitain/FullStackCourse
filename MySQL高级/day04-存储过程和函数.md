# 存储过程和函数
## 概述
存储过程和函数是: 事先经过编译并存储在数据库中的一段SQL语句的集合
存储过程和函数的区别在于函数必须有返回值,而存储过程没有
函数: 是一个由返回值的过程;
过程: 是一个没有返回值的函数;

## 创建存储过程
```sql
CREATE PROCEDURE procedure_name([proc_parameter[,...]])
begin
    -- SQL语句
end;    
```

示例:
```sql
delimiter $

create procedure pro_test()
begin
    select 'Hello Mysql';
end $
delimiter ;
```
DELIMITER:
该关键字用来声明SQL语句的分隔符,告诉MySQL解释器,该段命令是否已经结束,MySQL是否可以执行.默认情况下,delimiter是分号.

## 调用存储过程
```sql
call procedure_name();
```

## 查看存储过程
```sql
-- 查询db_name数据库中的所有存储过程
select name from mysql.proc where db='db_name';
-- 查询存储过程的状态信息
show procedure status;
-- 查询某个存储过程的定义
show create procedure db.pro_test1;
```

## 删除存储过程
```sql
DROP PROCEDURE [IF EXISTS] sp_name;
```

## 语法
存储过程是可以编程的,意味着可以使用变量,表达式,控制结构,来完成比较复杂的功能

### 变量
* DECLARE
通过`DECLARE`可以定义一个局部变量,该变量的作用范围只能BEGIN...END块中
```sql
DECLARE var_name[,...] type [DEFAULT value]
```

示例:
```sql
delimiter $

create procedure pro_test()
begin
    declare num int default 5;
    select num+10;
end $

delimiter ;
```

* SET
直接赋值使用SET , 可以赋常量或者赋表达式
```sql
SET var_name = expr [,var_name=expr]...
```

示例:
```sql
delimiter $

create procedure pro_test()
begin
    declare name varchar(20);
    set name = 'MYSQL';
    select name;
end $

delimiter ;
```

也可以通过`select...into`方式进行赋值
```sql
delimiter $

create procedure pro_test()
begin
    declare countnum int;
    select count(*) into countnum from city;
    select countnum;
end $

delimiter ;
```

### if条件判断
语法结构:
```sql
if search_condition then statement_list
    [elseif search_condition then statement_list]
...
    [else statement_list]
end if;        
```

需求:
```
根据定义身高变量,判定当前身高的所属的身材类型

    180及以上 -------> 身材高挑
    170 - 180 -------> 标准身材
    170以下 -------> 一般身材
```

示例:
```sql
delimiter $

create procedure pro_test()
begin
    declare height int default 175;
    declare description varchar(50);

    if height >= 180 then
        set description = '身材高挑';
    elseif height >= 170 and height < 180 then
        set description = '标准身材';
    else
        set description = '一般身材';
    end if;

    select description;            
end $

delimiter ;
```

### 传递参数
语法格式:
```sql
create procedure procedure_name([in/out/inout] 参数名 参数类型)
...
```
* IN: 该参数可以作为输入,需要调用方传入值 , 默认
需求:
```
根据定义的身高变量,判定当前身高的所属的身材类型
```

示例:
```sql
delimiter $

create procedure pro_test(in height int)
begin
    declare description varchar(50) default '';

    if height >= 180 then
        set description = '身材高挑';
    elseif height >= 170 and height < 180 then
        set description = '标准身材';
    else
        set description = '一般身材';
    end if;

    select concat('身高',height,'对应的身材类型为:',description); 
end $

delimiter ;
```


* OUT: 该参数作为输出 , 该参数可以作为返回值
需求:
```
根据传入的身高变量.获取当前身高的所属的身材类型
```

示例:
```sql
delimiter $

create procedure pro_test(in height int , out description varchar(100))
begin
    if height >= 180 then
        set description = '身材高挑';
    elseif height >= 170 and height < 180 then
        set description = '标准身材';
    else
        set description = '一般身材';
    end if;
end $

delimiter ;
```

调用:
```sql
call pro_test(168,@description);

-- @description: 用户会话变量,代表整个会话过程它都是有作用的,类似全局变量
select @description

-- @@global.sort_buffer_size: 系统变量 , 需要在变量前加上"@@"符号
```

* INOUT: 既可以作为输入参数 , 也可以作为输出参数


### case结构
语法结构:
```sql
-- 方式一:
case case_value
    when when_value then statement_list
    [when when_value then statement_list] ...
    [else statement_list]
end case;    

-- 方式二:
case
    when search_condition then statement_list
    [when search_condition then statement_list]
    [else statement_list]
end case;    
```

需求:
```
给定一个月份 , 然后计算除所在的季度
```

示例:
```sql
delimiter $

create procedure pro_test(month int)
begin
    declare result varchar(20);
    case
        when month >= 1 and month <= 3 then
            set result = '第一季度'
        when month >= 4 and month <= 6 then
            set result = '第二季度'    
        when month >= 7 and month <= 9 then
            set result = '第三季度'
        when month >= 10 and month <= 12 then
            set result = '第四季度'
    end case;

    select concat('您输入的月份为 :',month , '该月份为 :' ,result) as content;                
end$

delimiter ;
```

### while循环
语法结构:
```sql
while search_condition do

    statement_list

end while;    
```

需求:
```
计算从1加到n的值
```

示例:
```sql
delimiter $

create procedure pro_test(n int)
begin
    declare total int default 0;
    declare num int default 1;
    while num <= n do
        set total = total + num;
        set num = num + 1;
    end while;
    select total;    
end $

delimiter ;
```

### repeat结构
有条件的循环控制语句,当满足条件的时候退出循环,while是满足条件才执行,repeat是满足条件就退出循环

语法结构:
```sql
repeat
    statement_list
    UNTIL search_condition
end repeat;    
```

需求:
```
计算从1加到n的值
```

示例:
```sql
delimiter $

create procedure pro_test(n int)
begin
    declare total int default 0;

    repeat
        set total = total + n;
        set n = n - 1 ;
        until n = 0
    end repeat;

    select total;

end$

delimiter ;
```

### loop语句
LOOP实现简单的循环,退出循环的条件需要使用其他的语句定义,通常可以使用LEAVE语句实现
```sql
[begin_label:] LOOP
    statement_list
END LOOP [end_label]    
```
如果不在statement_list中增加退出循环的语句,那么LOOP语句可以用来实现简单的死循环

### leave语句
用来从标注的流程构造中退出 , 通常和BEGIN...END或者循环一起使用

示例
```sql
delimiter $

create procedure pro_test(n int)
begin
    declare total int default 0;

    ins: LOOP

        IF n <= 0 then
            leave ins;
        END IF;
    set total = total +n;
    set n = n - 1;

    END LOOP ins;

    select total;        
end $

delimiter ;
```

### 游标/光标
游标是用来存储查询结果集的数据类型,在存储过程和函数中可以使用光标对结果进行循环处理.光标的使用包括光标的声明,OPEN,FETCH和CLOSE
* 声明光标:
```sql
declare cursor_name cursor for select_statement;
```
* OPEN光标:
```sql
open cursor_name;
```
* FETCH光标:
```sql
fetch cursor_name into var_name [,var_name] ...
```
* CLOSE光标:
```sql
close cursor_name;
```

示例:
初始化脚本:
```sql
create table emp(
  id int(11) not null auto_increment ,
  name varchar(50) not null comment '姓名',
  age int(11) comment '年龄',
  salary int(11) comment '薪水',
  primary key(`id`)
)engine=innodb default charset=utf8 ;

insert into emp(id,name,age,salary) values(null,'金毛狮王',55,3800),(null,'白眉鹰王',60,4000),(null,'青翼蝠王',38,2800),(null,'紫衫龙王',42,1800);

-- 查询emp表中数据 并逐行获取进行展示
delimiter $

create procedure pro_test1()
begin
    declare e_id int(11);
    declare e_name varchar(50);
    declare e_age int(11);
    declare e_salary int(11);
    declare emp_result cursor for select * from emp;

    open emp_result;
    fetch emp_result into e_id , e_name , e_age , e_salary;
    select concat('id=',e_id,', name=',e_name,', age=',e_age, ',薪资为: ',e_salary);
    fetch emp_result into e_id , e_name , e_age , e_salary;
    select concat('id=',e_id,', name=',e_name,', age=',e_age, ',薪资为: ',e_salary);
    fetch emp_result into e_id , e_name , e_age , e_salary;
    select concat('id=',e_id,', name=',e_name,', age=',e_age, ',薪资为: ',e_salary);
    fetch emp_result into e_id , e_name , e_age , e_salary;
    select concat('id=',e_id,', name=',e_name,', age=',e_age, ',薪资为: ',e_salary);
    fetch emp_result into e_id , e_name , e_age , e_salary;
    select concat('id=',e_id,', name=',e_name,', age=',e_age, ',薪资为: ',e_salary);

    close emp_result;
end$

delimiter ;

--通过循环结构 , 获取游标中的数据
delimiter $

create procedure pro_test2()
begin
    declare id int(11);
    declare name varchar(50);
    declare age int(11);
    declare salary int(11);
    declare has_data int default 1;

    declare emp_result cursor for select * from emp;
    declare exit handler for not found set has_data = 0;
    open emp_result;

    repeat
        fetch emp_result into id , name , age , salary;
        select concat('id为',id,', name为',name,', age为',age,', 薪水为: ',salary);
    until has_data=0
        end repeat;
    close emp_result;
end $

delimiter ;

```

## 存储函数
语法结构:
```sql
create function function_name([param type ...])
returns type
begin
    ...
end    
```

案例:
```
定义一个存储过程 , 请求满足条件的总记录数
```

示例:
```sql
delimiter $

create function count_city(countryId int)
returns int
begin
    declare cnum int;

    select count(*) into cnum from city where country_id = countryId;

    return cnum;
end $

delimiter ;
```

调用:
```sql
select count_city(1);

select count_city(2);
```

## 练习
建表语句
```sql
create table dept1(
  id int unsigned primary key auto_increment,
  deptno mediumint unsigned not null default 0,
  dname varchar(20) not null default "",
  loc varchar(13) not null default ""
)engine=innodb default charset=gbk;

create table emp1(
  id int unsigned primary key auto_increment,
  empno mediumint unsigned not null default 0,/*编号*/
  ename varchar(20) not null default "",/*姓名*/
  job varchar(9) not null default "",/*工作*/
  mgr mediumint unsigned not null default 0,/*上级编号*/
  hiredate date not null,/*入职时间*/
  sal decimal(7,2) not null, /*薪水*/
  comm decimal(7,2) not null,/*红利*/
  deptno mediumint unsigned not null default 0/*部门编号*/
)engine=innodb default charset=gbk;
```

任务要求1：写一个随机生成100-109的函数（PS：FLOOR可以取整  示例：FLOOR(3.5) = 3）

任务要求2：写一个随机生成长度为N的字符串的函数（n为入参，字符串中字符为大小写的英文）

任务要求3：写一个存储过程，向两张表emp1与dept2中分别插入1W条数据


### 个人答案：
```sql
create database GaussDB_2;

use GaussDB_2;

create table dept1(
  id int unsigned primary key auto_increment,
  deptno mediumint unsigned not null default 0,
  dname varchar(20) not null default "",
  loc varchar(13) not null default ""
)engine=innodb default charset=gbk;


create table emp1(
  id int unsigned primary key auto_increment,
  empno mediumint unsigned not null default 0,/*编号*/
  ename varchar(20) not null default "",/*姓名*/
  job varchar(9) not null default "",/*工作*/
  mgr mediumint unsigned not null default 0,/*上级编号*/
  hiredate date not null,/*入职时间*/
  sal decimal(7,2) not null, /*薪水*/
  comm decimal(7,2) not null,/*红利*/
  deptno mediumint unsigned not null default 0/*部门编号*/
)engine=innodb default charset=gbk;

# 任务要求1：写一个随机生成100-109的函数（PS：FLOOR可以取整  示例：FLOOR(3.5) = 3）
delimiter $

create procedure Random_Num_Function()
begin
    declare num int default 0;
    set num = FLOOR(RAND() * 10 + 100);
    select num;
end $

delimiter ;

drop procedure Random_Num_Function;

call Random_Num_Function;


# 任务要求2：写一个随机生成长度为N的字符串的函数（n为入参，字符串中字符为大小写的英文）
delimiter $

create procedure Random_Str_Function(in n int)
begin
    declare origin_str char(52) default 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    declare str VARCHAR(255) default '';
    declare count int default 0;
    while count <= n do
        set str = concat(str,substring(origin_str,floor(1 + rand()*52),1));
            set count = count + 1;
        end while;
    select str;
end $;

delimiter ;

drop procedure Random_Str_Function;

call Random_Str_Function(10);

# 任务要求3：写一个存储过程，向两张表emp1与dept2中分别插入1W条数据
delimiter $

create procedure add_data()
begin
    declare count int default 0;
    while count <= 10000 do
        insert into dept1(deptno, dname, loc) values(count,concat('张三',count),'不知道是什么');
        insert into emp1(empno, ename, job, mgr, hiredate, sal, comm, deptno) values(count+2,concat('里斯',count+2),concat('职员',count+2),count+1,'2000-10-20',2000,500,count);
        set count = count + 1;
        end while;
end $;

delimiter ;

drop procedure add_data;

call add_data();
```
