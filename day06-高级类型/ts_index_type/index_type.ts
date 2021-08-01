//索引类型访问操作符
//通过[] 索引类型访问操作符  我们就能得到某个索引的类型
//索引类型可以约束对象属性的查询和访问
// 配合泛型约束能够建立对象,对象属性,属性值之间的约束关系
interface Person{
    name: string;
}

//声明一个类型 
//类型是通过 Person['name']得到的
type s = Person['name'];
let w:s = 'sas';

//应用场景
//需求: 获取指定对象 部分属性的值  放到数组中返回
//通过传入一个 对象键的数组 返回键对应的值的数组
// T[K] T代表obj  K obj[name] = string
let getValues = <T,K extends keyof T>(obj: T , keys:K[]):T[K][]=>{
    let arr:(T[K][]) = [];
    keys.forEach(key => {
        arr.push(obj[key]);
    })
    return arr;
}

let obj = {
    name: 'asfsa',
    age: 19,
    married: true
}

let res = getValues(obj,['name','age','married']);

console.log(res);

//把name的值取出放到数组中
let arr:(string | number | boolean)[] = ['adfa',123,true];


//索引访问操作符注意点:
//不会返回null / undefined / never 类型

// 了解到索引类型3个概念:
// 1,索引类型的查询操作符
// 	keyof T	
// 	表示类型T的所有公共属性的字面量的联合类型
// 2,索引访问操作符
// 	T[K]	
// 	表示对象T的属性K所代表的类型
// 3,泛型约束
// 	T extends U	
// 	表示泛型变量可以通过继承某个类型,获得某些属性