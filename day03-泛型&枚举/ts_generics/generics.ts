//泛型
//为什么用
//在定义函数 接口 和 类中 没有预先定义具体类型时 可以在使用时指定类型

//如何使用
//数组声明时 在定义参数前 指定<任意名称>() 返回值定义类型 <任意名称>

//使用场景
// 需要定义的为动态类型 并不确定需要明确给定什么类型时 可以使用泛型来在调用时添加明确类型


//能否不用


let foo = <T>(length:number , value:T):Array<T> => {
    let result: T[] = [];
    for(let i = 0 ; i < length ; i++){
        result[i] = value;
    }

    return result;
}

let result = foo<string>(3,"abc");
console.log(result);


//泛型约束
//继承的方法必须要有接口中的参数

interface lengthInfterface{
    length: number
}

let getArray = <T extends lengthInfterface>(item:number , value: T):T[] => {
    return new Array(item).fill(value);
}

let arr4 = getArray<string>(5,"abc");


interface LengthDefine{
    length: number;
}

function loggingIdentity<T extends LengthDefine>(arg: T): T{
    console.log(arg.length);

    return arg;
}


// let getValue = (obj,key) => {
//     return obj[key];
// }

// let getValue = (obj:Object , key:string) => {
//     return obj[key];
// }

//keyof操作符 
//首先定义T类型并使用extends关键字约束该类型必须时object类型的子类型
//然后使用keyof操作符获取T类型所有键 其返回类型为联合类型
//最后利用extends关键字约束K类型必须为 keyof T 联合类型的子类型

//解决 防止用户输入的属性并不是对象所拥有的属性 而 keyof 可以获取到 T中的所有属性
//所以为了泛型约束 才会使用 extends keyof
let getValue = <T,K extends keyof T>(obj:T , key:K)=> {
    return obj[key];
}

let obj = {
    a: 'a',
    b: 'b',
    c: 0
}


//例如:
//用于加载json返回值函数  它返回你任何传入类型的 Promise
const getJSON = <T>(config: {url: string; headers?: {[key: string]: string}}): Promise<T> => {
    const fetchConfig = {
        method: 'GET',
        Accept: 'application/json',
        'Content-Type' : 'application/json',
        ...(config.headers || {})
    };
    
    return fetch(config.url , fetchConfig).then<T>(response => response.json())
}

