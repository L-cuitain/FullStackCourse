//类型别名和接口

//
type uniType = string | number | boolean | symbol;

let value: uniType;
value = 5;
value = 'abc';

//接口和类型别名异同

//1.都可以描述属性或方法
// interface PersonInterface{
//     name: string;
//     study(): void;
// }

//定义类型别名
// type PersonType = {
//     name: string;
//     study():void
// }

//类似于类型别名的实现
// let obj:PersonType = {
//     name: 'fa',
//     study(){
//         console.log(111);
//     }
// }

//2.都允许扩展
//接口能扩展extends
// interface PersonInterface{
//     name: string;
//     study():void
// }

// interface ManInterface extends PersonInterface{
//     age: number;
// }

// class Man implements ManInterface{
//     name: string
//     age:number;
//     constructor(){
//         this.name = "as";
//         this.age = 123;
//     }

//     study(){
//         console.log(111);
        
//     }
// }


//类型
//3.type可以声明基本类型别名 联合类型 元组等类型 interface不能
// type str = string;
//元组 相当于限制长度限制元素类型的数组
// type str1 = [string,number,boolean];
// let arr:str1 = ['aaa',12,false];

// interface typeInterface{
//     name: string
// }

// interface typeInterface = string;  //语法错误

//4.type不会自动合并
interface PersonInterface{
    name: string;
}

interface PersonInterface{
    age: number;
}

interface PersonInterface{
    family: string;
}

class Family implements PersonInterface{
    name:string;
    age: number;
    family: string;
}

// type PersonType = {
//     name: string;
// } & {
//     name: string;
// }

type PersonType = {
    name: string;
}
