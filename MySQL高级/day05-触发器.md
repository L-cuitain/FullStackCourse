# 触发器
## 概述
触发器是与表有关的数据库对象,指在insert/update/delete之前或之后,触发并执行触发器中定义的SQL语句集合.触发器可以协助应用在数据库端确保数据的完整性,日志记录,数据校验等操作.

使用别名OLD和NEW来引用触发器中发生变化的记录内容,这与其他的数据库是相似的.现在触发器还只支持行级触发,不支持语句级触发

| 触发器类型      | NEW 和 OLD的使用                                        |
| --------------- | ------------------------------------------------------- |
| INSERT 型触发器 | NEW 表示将要或者已经新增的数据                          |
| UPDATE 型触发器 | OLD 表示修改之前的数据 , NEW 表示将要或已经修改后的数据 |
| DELETE 型触发器 | OLD 表示将要或者已经删除的数据                          |

## 创建触发器
语法结构:
```sql
create trigger trigger_name

before/after insert/update/delete

on tbl_name

[ for each row ]  --行级触发器

begin

    trigger_stmt;

end;
```

需求:
```
通过触发器记录 emp 表的数据变更日志 , 包含增加 , 修改 , 删除;
```

示例:

