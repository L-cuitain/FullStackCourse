//Object.defineProperty(obj,prop,descriptor)
//作用: 可以用来精确添加或修改对象的属性 只需要在descriptor对象中将属性特性描述清楚

//1.数据描述符 有四个属性配置
//configurable: 数据是否可删除 可配置
//enumerable: 属性是否可枚举
//value: 属性值,默认为undefined
//writable: 属性是否可读写

//存取描述器 有四个属性选项
//configurable: 数据是否可删除 可配置
//enumerable: 属性是否可枚举
//get: 一个给属性提供 getter 的方法 , 如果没有 getter 则为 undefined
//set: 一个给属性提供 setter 的方法 , 如果没有 setter 则为 undefined

//需要注意的是; 数据描述符的value writable 和 存取描述符中的 get , set属性不能同时存在 否则会抛出异常
let obj = {name: 'zm'};
let value;
Object.defineProperty(obj , 'age',{
    get(){
        console.log("获取值");
        return value;
    },
    set(v : string){
        console.log("设置值");
        value = v;
    }
})

console.log(obj);
