//类兼容性

//1.只比较实例成员 , 不比较类的构造函数和静态成员
//类实例化之后才有实例成员
// class Person{
//     uname : string
//     age: number
//     static family:string;
//     constructor(){
//         this.uname = "123";
//         this.age = 18;
//     }
// }

// class Teacher{
//     name: string;
//     age : number
//     static address:string
//     constructor(){
//         this.name = 'www';
//         this.age = 23;
//     }
// }

// let person = new Person();
// let teach = new Teacher();

// let a : Person;
// let b : Teacher;

// a = b;  //比较类的属性类型和属性名是否一致
// b = a;

// person = teach;
// teach = person;

//类的私有属性和受保护属性会影响兼容性
// class Person{
//     name: string
//     protected age : number
//     static family: string;
//     constructor(){
//         this.name = 'zsa';
//         this.age = 18;
//     }
// }

// class Teacher{
//     name: string;
//     age : number;
//     static address: string
//     constructor(){
//         this.name = '321';
//         this.age = 23;
//     }
// }

// let person = new Person();
// let teach = new Teacher();

// person = teach;
// teach = person;