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
创建日志表
```sql
-- 日志表
create table emp_logs(
  id int(11) not null auto_increment,
  operation varchar(20) not null comment '操作类型, insert/update/delete',
  operate_time datetime not null comment '操作时间',
  operate_id int(11) not null comment '操作表的ID',
  operate_params varchar(500) comment '操作参数',
  primary key(`id`)
)engine=innodb default charset=utf8;
```

创建insert型触发器 , 完成插入数据时的日志记录
```sql
delimiter $

create trigger emp_logs_insert_trigger
    after insert
    on emp
    for each row
    begin
        insert into emp_logs(id,operation,operate_time,operate_id,operate_params)values(null,'insert',now(),new.id,concat('插入后(id:',new.id,', name:',new.name,', age:',new.age,', salary:',new.salary,')'));
    end $

delimiter ;
```

创建 update 型触发器,完成更新数据时的日志记录
```sql
delimiter $

    create trigger emp_logs_update_trigger
        after update
        on emp
        for each row
        begin
            insert into emp_logs (id,operation,operate_time,operate_id,operate_params) values(null,'update',now(),new.id,concat('修改前(id:',old.id,', name:',old.name,', age:',old.age,', salary:',old.salary,') , 修改后(id',new.id, 'name:',new.name,', age:',new.age,', salary:',new.salary,')'));
        end $

delimiter ;
```


创建delete行的触发器,完成删除数据时的日志记录
```sql
delimiter $

    create trigger emp_logs_delete_trigger
        after delete
        on emp
        for each row
        begin
            insert into emp_logs(id,operation,operate_time,operate_id,operate_params)values(null,'delete',now(),old.id,concat('删除前(id:',old.id,', name:',old.name,', age:',old.age,', salary:',old.salary,')'));
        end $

delimiter ;
```


测试
```sql
insert into emp(id,name,age,salary) values(null, '光明左使',30,3500);
insert into emp(id,name,age,salary) values(null, '光明右使',33,3200);

update emp set age = 39 where id = 3;

delete from emp where id = 5;
```

## 删除触发器
如果没有指定`schema_name`, 默认为当前数据库

语法结构:
```sql
drop trigger [schema_name.]trigger_name
```

示例:
```sql
drop trigger emp_logs_delete_trigger;
drop trigger emp_logs_insert_trigger;
drop trigger emp_logs_update_trigger;
```

## 查看触发器
可以通过执行`SHOW TRIGGERS`命令查看触发器状态,语法等信息

语法结构:
```sql
show triggers;
```
