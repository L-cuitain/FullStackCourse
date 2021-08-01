# 分组函数


## 功能: 又称为统计函数 聚合函数 主要用于统计 分组

## 内容: max(str) min(str) count(str | *)计数 sum()求和函数 avg()平均函数

## 特点:
```sql
-- sum() 和 avg()只能用于处理数值类型的数据
-- max() min() count() 能处理任何数据
-- 以上函数都可以忽略null值
-- 以上函数可以和distinct结合使用
```



# 分组查询


## 语法:
```sql
-- select(查询列表) from(表) where(筛选条件) group by (分组列表(多个字段)) having(筛选条件) order by (排序字段) asc || desc;
```

## 执行顺序:
```sql
-- from子句 (是否存在此表)
-- where子句 (查询表中是否有符合条件的数据)  字段为实表中的字段
-- group by  (将符合条件的数据根据分组字段进行分组)
-- having  (将分完组的数据进行进一步筛选)  字段为虚表中的字段
-- select  (显示数据)
-- orer by (显示时 进行排序输出)
```

## 特点:
```sql
-- select后的查询列表 如果为group by中出现的字段必须在select后的查询列表中出现
-- 可以用where查询出结果 就不用having查询 (效率)
-- 分组类型
---- 分组前筛选(实表筛选) where
---- 分组后筛选(虚表筛选) having
-- 分组字段可以是一个 也可以是多个
-- 分组筛选完毕后可以排序
```



# 分页查询

## 含义: 如果数据量大  无法显示所有数据时  需要分页

## 语法:
```sql
-- select (查询列表) from (表) where(筛选条件) group by (分组列表(多个字段)) having(筛选条件) order by (排序字段) asc || desc limit (offset(开始) , size(条数));
```

## 特点:
```sql
-- limit子句需要放在所有子句的后面
-- 公式: limit (page-1) * size , size
```

## 分类:
* 分组前筛选(把筛选条件放在where里)
* 分组后筛选(把筛选条件放在having里)


## 注意: 
group by中出现的字段必须再查询列表中出现 但是查询列表中出现的字段不一定在group by 中出现    
 