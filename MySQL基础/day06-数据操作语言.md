# 数据操作语言 DML

## 插入语句
```sql
-- 方式1(给指定字段插入数据) : insert into 表名(列1,列2,...) values(值1,值2,....)
-- 注意: 插入的值的类型和顺序与表中的字段一致
insert into student(stu_name,stu_age) values('张三',20);

-- 方式1: 插入多条数据
insert into student(stu_name,stu_age) values ('123',32),('12341',34);

-- 方式2:插入多条数据
insert into `sid` values ('123',42),('1234',32);

-- 方式3:
insert into student set stu_name = '123', stu_age = 31;
```

## 修改语句
```sql
-- 修改单表记录
-- 语法: update 表名 set 列=新值 , 列=新值,...where 筛选条件
update student set stu_name = '1421' , stu_age = 53 where stu_id = '001';

-- 修改 多表记录
-- 语法: update 表1 别名 inner / left / right join 表2 别名 on 连接条件 set 列=值 , 列=值 where 筛选条件
```

## 删除语句
```sql
-- 单表直接删除
-- delete from 表名 where 条件
delete from student where stu_age = 12;

-- 多表的删除
-- 语法: delete 表1的别名 , 表2的别名 from 表1 别名 inner / left / right join 表2 别名 on 连接条件 where 筛选条件
```


# 连接查询

## 语法:
```sql
-- select 查询列表
-- from 表1 别名 [连接类型]
-- join 表2 别名
-- on 连接条件
-- where 筛选条件
-- group by 分组列表
-- having 筛选条件
-- order by 排序列表
```

## 内连接(等值连接 非等值连接 自连接)
### 语法:
```sql
-- select 查询列表
-- from 表1 别名 inner join 表2 别名
-- on 连接条件
-- where 筛选条件
-- group by 分组列表
-- having 筛选条件
-- order by 排序列表
```

## 外连接
### 分类: 左外 右外 全外(oracle中有)
### 语法:
```sql
-- select 查询列表
-- grom 表1 别名 left outer [right outer]
-- join 表2 别名
-- on 连接条件
-- where 筛选条件
-- group by 分组列表
-- having 筛选条件
-- order by 排序列表
```

#### 应用场景: 用于查询一个表中有, 另外一个表中没有的记录
#### 左外连接: left join 左边是主表 , 以左边进行匹配
#### 右外连接: right join 右边是主表 以右边进行匹配

## 交叉连接(笛卡尔积)
```sql
select last_name , department_name from employees e , departments d;
```

## 子查询
### 含义: 出现在其他语句内部的select语句 没有出现在其他语句内部的select语句叫主查询或外查询
### 分类
```sql
-- 按照子查询出现的位置
-- 1.select 后面  只能跟 标量子查询
-- 2.from后面 只能跟表子查询
-- 3.where 或 having 后面 标量 , 列 , 行子查询
-- 4.exists(是否存在) 后面 表子查询
-- 按照数据结果集不同
-- 结果是一行一列 为标量子查询(一个单元格为标量)
-- 结果是一行多列 为行子查询(只有一行为行子查询)
-- 结果是多行一列 为列子查询(只有一列为列子查询)
```

### 特点
```sql
-- 1.子查询需要放在小括号里
-- 2.子查询执行优先于主查询
-- 3.标量子查询 一般搭配单行操作符使用(> < >= <= <>)
-- 4.子查询一般放在条件右侧
```

## exists子查询
```sql
-- 结果: 1 or 0
SELECT EXISTS(SELECT employee_id FROM employees);
```