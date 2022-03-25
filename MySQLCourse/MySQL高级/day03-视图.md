# 视图
## 视图概述
视图(View)是一种虚拟存在的表,并不在数据库中实际存在,行和列数据来自定义视图的查询中使用的表,并且是在使用视图时动态生成的.
视图相对于普通的表的优势主要包含几项:
* 简单: 使用视图的用户完全不需要关心后面对应的表的结构,关联条件和筛选条件,对用户来说已经是过滤好的符合条件结果集
* 安全: 使用视图的用户只能访问他们被允许查询的结果集,对表的权限管理并不能限制到某行某列,但通过视图就可以简单获取
* 数据独立: 一旦视图的结构确定,可以屏蔽表结构变化对用户的影响,源表增加列对视图没有影响,源表修改列名,则可以通过修改视图解决,不会造成对访问者的影响

## 创建视图
```sql
-- 创建视图
CREATE [OR REPLACE] [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]

VIEW view_name [(column_list)] AS select_statement [WITH [CASCADED | LOCAL] CHECK OPTION]
```

* MERGE
引用视图和视图定义的语句文本被合并,使视图定义的部分取代语句的相应部分.
意味着视图只是一个规则,语句规则,当查询视图时,把查询视图的语句如:where...哪些与创建时的语句where子句等合并,分析,形成一条select语句
```sql
-- 商品
CREATE TABLE `goods` (
  `goods_id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(50) NOT NULL,
  `shop_price` int(11) NOT NULL,
  PRIMARY KEY (`goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 创建一张视图查询所有商品价格大于3000的商品
create view g2 as select goods_id,goods_name,shop_price from goods where shop_price > 3000;

-- 查询视图 再加一个where条件
select * from g2 where shop_price < 5000;

-- 这时它会把两条语句合并分析最终组合
select goods_id,goods_name,shop_price from goods where shop_price > 3000 and shop_price < 5000;
```

* TEMPLABLE
视图中的结果被检索到一个临时表中,然后用来执行语句.

* UNDEFINED
MySQL选择使用哪种算法.如果可能的话,它更倾向与MERGE而不是TEMPLATE,因为MERGE通常更有效率,而且如果使用临时表,视图无法更新

官方说法:
MERGE 通常更有效率
MERGE 和 TEMPLATE 有一个显著的区别,
MERGE最终去查的还是原表,而TEMPLATE去查的时虚拟表


## 修改视图
```sql
ALTER [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]

VIEW view_name [(column_list)] AS select_statement [WITH [CASCADED | LOCAL] CHECK OPTION]
```
选项:
WITH[CASCADED | LOCAL] CHECK OPTION 决定是否允许更新数据使记录不再满足视图的条件

LOCAL: 只要满足本视图的条件就可以更新
CASCADED: 必须满足所有针对该视图的所有视图的条件才可以更新(默认值).

示例:
```sql
-- 创建或取代视图
create or replace view city_country_view as select t.*,c.country_name from country c , city t where c.country_id = t.country_id;

-- 修改视图
ALTER VIEW g2 as select goods_name,shop_price from goods where shop_price > 5000;
```


## 查看视图
* 从MySQL 5.1版本开始,使用`SHOW TABLES`命令时不仅显示表的名字,同时也会显示视图的名字
```sql
show tables;
```

* 在使用`SHOW TABLE STATUS`命令时,不但可以显示表的信息,同时也可以显示视图的信息
```sql
-- 显示table及view状态
show table status;

-- 显示单个table或view状态
show table status like 'city_country_view';
```

* 如果要查询某个视图的定义,可以使用`SHOW CREATE VIEW`命令进行查看
```sql
show create view city_country_view;
```

## 删除视图
语法:
```sql
DROP VIEW [IF EXISTS] view_name[,view_name1]... [RESTRICT | CASCADE]
```
示例:
```sql
drop view city_country_view;
```




