//接口 
//可以用来规范数组的形状


interface Iperson{
    //只读
    readonly name: string,
    //可选属性
    age?: number
}

//内联注解:
declare const myPerson1:{name:string,age:number}

//接口形式:
declare const myPerson2:Iperson;

interface Iperson{
    birthday: string
}

//无法赋值 只读属性
// myPerson2.name = "zhangs1";

myPerson2.birthday = "123";



interface Crazy{
    // new():{
        hello:number;
    // }
}

class CrazyClass implements Crazy {
    // constructor(){
    //     return { hello: 123 };
    // }

    hello: number
    constructor(hello:number){
        this.hello = hello;
    }
}

const crazy = new CrazyClass(421);

console.log(crazy.hello);



//函数类型接口
// interface getName{
//     //定义方法
//     (x:string , y:number):void
// }

// type func = string | number;
// // type func = (x:string , y:number) => string;

// const fun:getName = function(x , y){
//     console.log(x + " " + y);
// }

// fun('张三',123);
// interface getName{
//     //定义方法
//     (x:string , y:number):void
// }

// let fun:getName = function(x,y){
//     console.log(x + " " + y);
// }

//使用类型别名
type func = (x:string,y:number) => string;

let fun:func = function(x,y){
    return (x + " " + y)
}


//接口实现
// interface Animal{
//     name: string;
//     age: number;

//     //行为
//     behavior():void
// }

// class Cat implements Animal{
//     name: string;
//     age: number;

//     constructor(name:string , age:number){
//         this.name = name;
//         this.age = age;
//     }

//     behavior(){
//         console.log(this.name + " " + this.age);        
//     }
// }

// const cat = new Cat("李四",123);

// cat.behavior();

interface Animal{
    name: string,
    age: number,

    behavior():void
}

class Dog implements Animal{
    name: string;
    age : number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    behavior(){
        console.log(this.name + " " + this.age);
    }
}


const dog = new Dog("里斯",123);
dog.behavior();


//接口继承
interface tea{
    name:string
}

interface cola{
    color:string
}

interface juice{
    sweet:string
}

interface water extends tea , cola , juice{
    sideLength: number;
}

class drink implements water{
    name:string;
    color: string;
    sweet: string;
    sideLength: number
}


// interface和type区别
// interface能够声明合并
// type可以声明基本类型别名 联合类型 元组等类型
// type语句中还可以使用typeof获取实例的 类型进行赋值