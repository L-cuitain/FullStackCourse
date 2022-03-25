//函数兼容性

//a可以赋值给b b一定包含a
// let fn1 = (x:number , y:number):number => {return 1};
// let fn2 = (z:number , y:number):void => {};
// let fn4 = (w:number , x:number , y:number , z:number):void => {}
// let fn3 = (x:string , y:string):void => {};

// fn1 = fn2;  //返回值类型

// fn2 = fn1;

// fn4 = fn1;



//参数类型
// let fn1 = (x:number , y:number):void => {};
// let fn2 = (x:number):void => {};
// let fn3 = (x:string , y:string):void => {};

// fn1 = fn2;  //参数多的可以接收参数少的函数的赋值
// fn2 = fn1;  //参数少的不能接受参数多的

// fn3 = fn1;  //参数类型不同 不可以互相赋值



//返回值类型
//返回值类型必须一模一样 不一样类型不兼容
// let fn1 = (x:number, y:number):number => 123;
// let fn2 = (x:number):number => 456;
// let fn3 = (x:string , y:string):string => "nihao";

// fn1 = fn2;
// fn1 = fn3;  //返回值必须一样 否则不兼容


//函数双向协变
//参数的双向协变
//要么是number 要么是string
// let fn1 = (x:(number | string)):void => {};
// //只有一个类型就是number
// let fn2 = (y:number):void => {};

// fn1 = fn2;
// fn2 = fn1;


//返回值的双向协变(版本不同结果也可能不同)
// let fn1 = (x:boolean):(string | number) => x ? "aaa" : 123;
// let fn2 = (y:boolean):string => 'aaa'

// fn1 = fn2;  //单一数据类型可以赋值联合类型
// fn2 = fn1;  //联合类型不能赋值给单一类型


//函数重载
//同一函数名 参数的个数和类型不同 可以调用不同的功能代码
// function add(x:number):number;
// function add(z:number , y:string):number;
// // function add(q:string,n:number):number;

// function add(j:number):number{
//     return j;
// }

// let result = add(2);
// console.log(result);

// function subAdd(qw:number , vds:number):number;
// function subAdd(num1:number , num2:number):number{
//     return 2;
// }

// //重载不能互相赋值
// subAdd = add;
// add = subAdd;
