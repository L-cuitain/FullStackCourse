//类型断言 as
//相当于其他语言的类型转换  但不进行特殊的数据检查和解构
//只在编译阶段起作用

let str:any = "123";
let num1:any = 123421;
let str1 = (str as number);
let num2 = (num1 as string);
console.log(typeof str1);
console.log(typeof num2);




//接口
interface Foo{
    name: string,
    swim() : void
}

interface Too{
    name: string,
    swim(): void
}

function swim(animal: Foo | Too){
    if(typeof (animal as Too).swim === 'function'){
        return true;
    }
    return false;
}


//类 需要构造函数
class Aoo{
    engine:String;
    // 构造函数 
    constructor(engine:string) { 
        this.engine = engine 
    } 
}


interface Foo{
    bar: number;
    bas: string;
}

const foo = {} as Foo;
foo.bar = 123;
foo.bas = "hello";

