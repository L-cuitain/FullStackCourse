//函数

//返回值为字符串
function test():string {
    return "调用函数"
}

test();

//带参数函数
function test2(x: number , y: number):number{
    return x + y;
}

test2(1,2);


//设置可选参数 在可选的参数名加 ? 标识
function test3(x:number , y?:number){
    return x + y;
}

test3(1);

//剩余参数 将不确定的参数定义为数组传入
function test4(x?:number , ...y:string[]){
    return y.join(" ")
}

test4(12,"adas","adfs","fags");


//构造函数
//参数说明
//arg1 , arg2 ... 参数列表
//functionBody: 一个含有包括函数定义的js语句的字符串
var myFunctionTest = new Function("a","b","return a * b");
var x = myFunctionTest(4,3);
console.log(x);


//箭头函数(lambda)
var foo = (x:number) =>  10 + x; 


//函数重载
// function add(x:string,y:string):string;
// function add(x:number, y:number):number;

//函数可选参数 ?标识符
let fn = function(x:number , y?:number){
    if(y){
        return x + y;
    }else{
        return x;
    }
}

fn(12);


//参数默认值
let fn1 = function(x:number , y:number = 3){
    return x + y;
}

fn1(12);


//rest参数(剩余参数)
let getNum1 = function(x:number , ...rest:number[]){
    for(let i = 0 ; i < rest.length ; i++){
        console.log(rest[i]);
        
    }
}

getNum1(12,22,33,44,55,66);
