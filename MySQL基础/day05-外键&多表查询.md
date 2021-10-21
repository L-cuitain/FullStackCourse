# 外键(FOREIGN KEY)

## 概念
```sql
-- 一张表 中有一个字段 保存的值指向另外一张表的主键
```

## 设置外键


### 添加外键:
```sql
-- 1.在创建表时  在建表语句中添加格式
-- 语法: FOREIGN KEY(自己的列名) REFERENCES 主表名 (主列表);

-- 2.运行此格式 给表添加外键
-- 语法: ALTER TABLE 从表 ADD [constraint] [外键名称] FOREIGN KEY (从表外键字段名) REFERENCES 主表(主表的主键)


```

### 删除外键:
```sql
-- 语法: ALTER TABLE 从表 DROP FOREIGN KEY 外键名称

```

### 修改外键:
```sql
-- 外键不允许被修改  只能删除后添加
```


## 外键基本要求:
```sql
-- 1.外键字段需要保证与关联的主表的主键字段类型完全一致
-- 2.基本属性需要相同
-- 3.如果是在表后增加外键  对数据还有一定的要求(从表数据与主表的关联关系)
-- 4.外键只能使用 innodb 储存引擎 ; myisam 不支持
```

## 外键约束:
```sql
-- 定义: 通过建立外键关系后  对主表和从表都会有一定的数据约束效率
-- 基本语法: add foreign key(外键字段) references 主表(主键) on 约束模式;

-- 约束模式(三种):
-- 1.district : 严格模式 , 默认的 , 不允许操作
-- 2.cascade : 级联模式 , 一起操作 , 主表变化 , 从表数据跟着变化
-- 3.set null : 置空模式 , 主表变化(删除) , 从表对应记录设置为空 : 前提从表中对应的外键字段允许为空

-- 作用: 保证数据的完整性 主表与从表的数据要一致
```

# 多表查询


## 交叉连接查询
```sql
-- 语法: select A , B from 表1, 表2 where 表1.外键 = 表2.主键;
```

## 内连接查询(使用的关键字 inner join -inner 可以省略)

### 隐式内连接:
```sql
-- 语法: select * from A , B where 条件;
```

### 显示内连接
```sql
-- 语法: select * from A inner join B on 条件;
```

## 外连接查询(使用的关键字 outer join -outer 可以省略)

### 左外连接: left outer join
```sql
-- 语法: select * from A left outer join B on 条件;
```

### 右外连接: right outer join
```sql
-- 语法: select * from A right outer join B on 条件;
```

## 子查询

### 标量子查询: 子查询返回的结果 是一个数据(一行一列)
```sql
-- 语法: select *(字段) from 表 where 条件判断 =/<> (select 字段名 from 表 where 条件判断)
-- 注意: 子查询得到的结果只有一个值
```

### 列子查询: 子查询返回的结果是一列数据(一列多行)
```sql
-- 语法: select *(字段) from 表 where 条件判断 in (select 字段名 from 表 where 条件判断)
```

### 行子查询: 子查询返回的结果是一行多列
```sql
-- 语法: select *(字段) from 表 where 条件[( 构造行元素 )] = (行子查询)
```

### 表子查询: from子查询
```sql
-- 语法: select *(字段) from (表子查询) [where] [group by][having][order by][limit];

-- 表子查询和其他子查询区别:
-- 其他子查询用于 where 条件判断 : where 查询
-- 表子查询用于 from 数据源 : from 子查询
```

### Exists 子查询: 查询返回结果只有 0 或 1 , 1 代表 成立 , 0 代表 不成立
```sql
-- 语法: select *(字段) from 表 where exists(查询语句);
-- exists 根据查询得到的结果判断  如果结果存在 则返回 1 否则返回 0
```

## 子查询关键字

### In
```sql
-- 语法: 主查询 where 条件 in(列子查询)
```

### Any
```sql
-- 语法: 主查询 where 条件 any(列子查询)

-- 条件在查询结果中有任意一个匹配即可 等价于in
```

### Some
```sql
-- 语法: 主查询 where 条件 some(列子查询)
-- 与any定义相同 否定不同: not any 与 not some
```

### All
```sql
-- 语法1: 主查询 where 条件 = All(列子查询) : 等于其中所有
-- 语法2: 主查询 where 条件 <> All(列子查询) : 不等于其中所有

-- 注意: 如果匹配字段有NULL 则不参与匹配
```

# 表之间关系

## 一对多关系
```sql
-- 原则: 在从表(多方)创建一个字段，字段作为外键指向主表(一方)的主键.
```

## 多对多关系
```sql
-- 原则: 需要创建第三张表,中间表中至少两个字段，这两个字段分别作为外键指向各自一方的主键.
```
## 一对一关系
```sql
-- 原则: 外键唯一: 主表的主键和从表的外键(唯一) , 形成主外键关系 , 外键唯一
-- 外键唯一: 主表的主键和从表的外键(唯一) , 形成主外键关系 , 外键唯一
```



