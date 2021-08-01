//枚举
//格式: enum 枚举类型名字{值,值,值...}
// let flag: boolean = false;
// let num: number = 10;
// let str3: string = "老王";
// let arr: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];


//普通枚举
// enum Days{
//     Sun,
//     Mon,
//     Wed,
//     Tue = 10,
//     Sat
// }

// console.log(Days["Sun"]);
// console.log(Days["Tue"]);


//字符串枚举
// enum Days{
//     Sun = "Sun",
//     Mon = "Mon",
//     Wed = "Wed",
//     Tue  = "Tue",
//     // Sat   //手动声明变量后的值必须赋值
// }

// console.log(Days["Wed"]);    


//异构枚举
// enum Sum{
//     one = 1,
//     two = "123",
//     four = 2,
//     three = "572"p
// }

// console.log(Sum["four"]);


//常数枚举
//指使用 const enum 定义的枚举类型
//常数枚举与普通枚举的区别
//普通枚举会生成真实存在的对象
//常量枚举不会生成真实存在的对象  而是利用枚举成员的值直接替换使用到的地方
// const enum Directions{
//     Up,
//     Down,
//     Left,
//     Right = "blue"
// }

// let directions = [Directions.Up , Directions.Down , Directions.Left , Directions.Right];

// //普通枚举
// enum Direction{
//     Up = 3,
//     Down,
//     Left,
//     Right
// }

// let direction = [Directions.Up , Directions.Down , Directions.Left , Directions.Right];


// 运行时枚举
// 枚举在编译之后是一个真实存在的对象  所以可以在运行时使用
// 而像接口这种只是用来做约束做静态检测的代码  编译之后不存在
// interface TestInterface{
//     age: string,
//     num: number
// }

// enum Gender{
//     Male,
//     Female
// }

// let a = Gender.Male;
// console.log(a);


//枚举成员类型
// enum Gender{
//     Male,
//     Female
// }

//人接口
// interface PersonInterface{
//     gender: Gender.Male
// }

// //类实现人接口
// class Person2 implements PersonInterface{
//     gender: Gender.Male

//     constructor (){
//         this.gender = 1;
//     }
// }

//当前版本  不可以使用字符串作为接口的类型  只能用数字枚举
//联合枚举类型
//什么是联合枚举类型
//联合枚举就是将多种数据类型通过 ! 链接起来
//可以把枚举类型当作一个联合类型使用
let value: number | string;
value = 4;
value = "asdafs";

enum Gender{
    Male,
    Female
}

// let value : Gender.Male | Gender.Female

interface PersonInterface{
    gender: (Gender.Male | Gender.Female)
}

class Person1 implements PersonInterface{
    gender: (Gender.Male | Gender.Female)

    constructor(){
        this.gender = 1;
    }
}








  











