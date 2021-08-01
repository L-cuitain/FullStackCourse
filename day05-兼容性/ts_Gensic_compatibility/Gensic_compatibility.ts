//泛型兼容性
//泛型只影响使用的部分 不会影响声明的部分

//声明一个接口 T类型
//由t类型来确定age的类型
// interface TypeInterface<T>{
//     age: T
// }

// interface PersonInterface<U>{}

// let s:TypeInterface<number> = 5;
// let a:TypeInterface<string> = '23';

// s = a;  //类型不同 无法兼容
// a = s;

// s = {
//     age : 5
// }

// a = s;

// interface TypeInterface<T>{
//     age : T
// }

// interface PersonInterface<U>{}

// class Father implements TypeInterface<number>{
//     age: number
//     constructor(){
//         this.age = 5;
//     }
// }

// class Mother implements TypeInterface<string>{
//     age: string
//     constructor(){
//         this.age = '5';
//     }
// }

// Father = Mother;  //报错 无法分配Father 因为它不是变量
// Mother = Father;