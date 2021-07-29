//declare可以向Typescript域中引入一个变量 在编写代码时实现智能提示功能

//声明一个字符串类型的变量 ant
declare var ant:string;
ant

//声明一个常量并赋值
declare const min: 1;
min

//声明一个传递string 并无返回值的函数
declare function func(str:string): void;

func("123");

//声明class类
declare class Person{
    static maxAge: number //静态变量
    static getMaxAge(): number  //静态方法

    constructor(name: string , age: number)   //构造函数
    getName(id: number) :string
}

let p = new Person("张三",12);


//声明命名空间
declare namespace space{
    function func(str:string):string;
    let num : number;
}

//模块化
declare module "nameMod"{
    export let a : number;
    export function b(): number;
    export namespace c{
        let cd :string
    }
}
