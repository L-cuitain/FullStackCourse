//类型断言 as
//相当于其他语言的类型转换  但不进行特殊的数据检查和解构
//只在编译阶段起作用
var str = "123";
var num1 = 123421;
var str1 = str;
var num2 = num1;
console.log(typeof str1);
console.log(typeof num2);
function swim(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
//类 需要构造函数
var Aoo = /** @class */ (function () {
    // 构造函数 
    function Aoo(engine) {
        this.engine = engine;
    }
    return Aoo;
}());
