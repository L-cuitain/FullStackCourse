//keyof操作符
//可以获取某种类型的所有键 其返回值为联合类型
// interface Person{
//     name:string;
//     age:number;
//     location: string;
// }

// type k1 = keyof Person;  // name | age | location
// type k2 = keyof Person[];   // number | length | push | concat
// type k3 = keyof {[x:string]:Person};  // string | number


//除接口外 keyof也可以用于操作类
class Person1{
    name:string;
    age: number;

    constructor(name:string , age: number){
        this.name = name;
        this.age = age;
    }
}

//此时 sname的类型必须为 Person1的类型
let sname: keyof Person1;
//只能为 Person1类的属性
sname = "name";   
sname = "age";
console.log(sname);


//keyof操作符除了支持接口和类之外 也支持基本数据类型
// type k1 = keyof boolean;


// 此外 keyof 也称为输入索引类型查询  与之相对应的是索引访问类型  也称为查找类型
// 在语法上 看起来像属性或元素访问  但最终会被转换为类型
type P1 = Person1["name"];  // string
type P2 = Person1["name" | "age"]  // string | number
type P3 = string["charAt"]  // (pos: number) => string
type P4 = string[]["push"]  // (...items: string[]) => number
type P5 = string[][0] // string

// let bname: P5 = 123;








