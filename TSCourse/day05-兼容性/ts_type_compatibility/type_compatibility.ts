//类型兼容
//类型兼容用于确定一个类型是否能赋值给其他类型
// let str : string = 'Hello';
// let num : number = 123;

// str = num; //Error: 'number'不能赋值给'string'
// num = str; //Error: 'string'不能赋值给'number'


//数据类型兼容
//类型兼容性用于确定一个类型是否能赋值给其他类型
//协变(Covariant): 只在同一个方向
//逆变(Contravariant): 只在相反的方向
//双向协变(Bivariant): 包括同一个方向和不同方向
//不变(Invariant): 如果类型不完全相同 则它们是不兼容的


//接口兼容性
//检查接口的兼容性  接口能不能赋值给对象
// interface PersonInterface{
//     age: number;
// }
// let t: PersonInterface;

// let p1 = {age: 18};
// let p2 = {name: "123"}
// let p3 = {age: 18 , name: '漳卅'}

// 
// t = p1;
// t = p2;  //p2中没有 age字段  所以报错 类型{name:string}中缺少age
// t = p3;


//会递归检查
// interface PersonInterface{
//     age: number;
//     name: {
//         firstName: string
//     }
// }

// let k: PersonInterface;

// let p1 = {age: 18};
// let p2 = {age: 19 , name: 'asa'}
// let p3 = {age: 19 , name: {firstName: 'adfa'}}

// k = p1;  //p1不存在name属性 所以报错
// k = p2;  //p2的name不为对象 并且没有firstName
// k = p3;  //p3正确 属性可多不可少


//声明一个接口
//参数类型必须一致 不然不兼容
// interface fn{
//     (x:number , y:number):void
// }

// let fn1:fn = (x:number , y:string) => {}

//接口的实现 只有类能实现接口 然后通过实例类来创建对象
//接口在ts中相对来讲比较泛 不仅仅可以让类来实现接口 , 更多的用处是 一种结构化的数据类型 它是一个规定或者是规范  告诉你这个数据应该如何写

// interface FnInterface{
//     (a:number,b:string):void
// }

// let fn:FnInterface = (a:number) => {
//     console.log(a);   
// }

// //报错 必须声明两个参数
// fn(1);