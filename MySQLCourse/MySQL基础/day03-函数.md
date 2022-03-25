## 字符函数

```sql
# 字符函数(length()、concat()、substr()、instr()、trim()、upper()、lower()、 lpad()、rpad()、replace())

-- 1.length(str) 返回字符串的储存长度
        select length('helloworld');
-- 2.concat(str1,str2) 将多个字符串首尾相连后返回
        select concat('my','sql');
    -- 如果有任何参数为null 则函数返回null
        select concat('my',null,'sql');
    -- 如果参数是数字 则自动转换为字符串
        select concat(14,'sql');
-- 3.substr(str,pos[len])  从字符串中的指定位置pos开始取一个字串返回
    -- len指定子串的长度 如果省略则一直取到字符串的末尾
        select substr('hello world',5);
        select substr('hello world',5,3);
    -- len为负值表示从字符串尾部开始取
        select substr('hello world',-5);
-- 4.instr(str,substr)  从字符串str中返回字串substr第一次出现的位置
        select instr('hello world','lo');
-- 5.trim()  从字符串中去掉两端,前缀或后缀 并返回
        select trim('   bar    ');
    -- 去掉左边指定字符     
        select trim(leading 'x' from 'xxxbarxxx');
    -- 去掉两边指定字符
        select trim(both 'x' from 'xxxbarxxx');
    -- 去掉右边指定字符
        select trim(trailing 'x' from 'xxxbarxxx');        
-- 6.upper(str)  将字符串全部转换为大写字母
        select upper('fasdfa SFA');
-- 7.lower(str)  将字符串全部转换为小写字母
        select lower('FDAFDGA fda');
-- 8.lpad(str,len,padstr)  在str的左边填充给定的字串padstr到指定的长度len 返回填充后的字符串
        select lpad('hello',7,'??');
-- 9.rpad(str,len,padstr)  在str的右边填充给定的字串padstr到指定的长度len 返回填充后的字符串
        select lpad('hello',7,'??');
-- 10.replace(str,from_str,to_str)  在字符串str中查找所有的子串from_str , 用to_str替换返回
        select replace('hello world','hello','HELLO');
```

## 数学函数

```sql
# 数学函数(ROUND(),CEIL(),FLOOR(),TRUNCATE(),MOD())

-- 1.round(数字,小数点后保留几位) 四舍五入
SELECT ROUND(1.64);
SELECT ROUND(1.65);
SELECT ROUND(-1.45);
SELECT ROUND(1.456, 2);
-- 2.ceil(数字)向上取整(往大取)
SELECT CEIL(-1.01);
SELECT CEIL(1.0000);
-- 3.floor(数字) 向下取整(往小取)
SELECT FLOOR(-8.2);
-- 4.truncate(数字,保留小数点后几位)截断
SELECT TRUNCATE(1.6445,1);
-- 5.mod()取余
SELECT MOD(10,3);
```

## 日期函数

```sql
# 日期函数(now() curdate() curtime() year() month())

-- 1.返回msyql所在的电脑的当前日期+时间
SELECT NOW();
-- 2.返回当前系统的日期
SELECT CURDATE();
-- 3.返回当前系统的时间
SELECT CURTIME();
-- 4.返回指定的年或月
SELECT YEAR(NOW()) AS '年';
SELECT MONTH(NOW()) AS '月份';
-- 5.返回xxxx年xx月xx日
SELECT DATE_FORMAT(NOW(), '%Y年%m月%d日');
```

## 流程控制函数

```sql
# 流程控制函数(if)

-- 语法: IF(条件表达式,表达式为true执行这里,表达式为false执行这里)
SELECT IF(9>5,'是','否') 三元运算;
```

## 聚合函数

```sql
# 聚合函数(分组函数)

-- 功能: 主要是做统计，又称为分组函数或者是统计函数
-- 内容: sum()求和函数 avg()求平均值函数 max()最大值 min()最小值 count()计数
-- 特点: 1.sum() avg()用于处理数值 max() min() count()用于处理任何数据
--       2.聚合函数都是忽略null值
--       3.可以distinct配合使用去重
--       4.group by

```

## 分组排序
```sql
# 分组查询

# 语法:
-- select 聚合函数，列(要求必须出现在group by后面)
-- from 表
-- [where 筛选条件]
-- group by 分组列表
-- [order by 排序列表 升降序]

# 注意: 查询列表必须特殊，要求是分组函数和group by函数出现的字段
 
# 特点:
-- 1.分组查询中的筛选条件分为两类(筛选的情况不同)
-- 1.1 分组前筛选: 原始表 group by 子句前面 where
-- 1.2 分组后筛选：分组后的结果集 group by子句后面 having
-- 2.group by子句支持单个字段分组 多个字段也可以分组
-- 3.需要排序的话就放在group by 后面进行排序就可以了