//交叉类型和联合类型

//联合类型
//格式: type1 | type2 | ...
//联合类型是多个类型中任意一个类型
let a:number | string | boolean;  //声明a的类型

a = 123;
a = 'fagsa';
a = true;

// a = Symbol(); //没有该类型


//交叉类型
//格式:type1&type2&type3
//交叉类型是将多个类型合并为一个类型
// let getNewObj = <T,U>(target:T , source:U):(T&U)=>{
//     let res = {} as (T&U);
//     //Property 'assign' does not exist on type 'ObjectConstructor'
//     //使用类型断言 对Object进行具体类型的指定 使用<>或as关键字都可以 指定为any
//     res = (<any>Object).assign(target,source);

//     return res;
// }

// console.log(getNewObj({name: "fasdf"},{mobile:124212}));

