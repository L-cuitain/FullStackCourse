//函数
//返回值为字符串
function test() {
    return "调用函数";
}
test();
//带参数函数
function test2(x, y) {
    return x + y;
}
test2(1, 2);
//设置可选参数 在可选的参数名加 ? 标识
function test3(x, y) {
    return x + y;
}
test3(1);
//剩余参数 将不确定的参数定义为数组传入
function test4(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    return y.join(" ");
}
test4(12, "adas", "adfs", "fags");
//构造函数
//参数说明
//arg1 , arg2 ... 参数列表
//functionBody: 一个含有包括函数定义的js语句的字符串
var myFunctionTest = new Function("a", "b", "return a * b");
var x = myFunctionTest(4, 3);
console.log(x);
//箭头函数(lambda)
var foo = function (x) { return 10 + x; };
//函数重载
// function add(x:string,y:string):string;
// function add(x:number, y:number):number;
