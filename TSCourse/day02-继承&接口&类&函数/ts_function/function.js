//函数
//函数可选参数 ?标识符
var fn = function (x, y) {
    if (y) {
        return x + y;
    }
    else {
        return x;
    }
};
fn(12);
//参数默认值
var fn1 = function (x, y) {
    if (y === void 0) { y = 3; }
    return x + y;
};
fn1(12);
//rest参数(剩余参数)
var getNum1 = function (x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
};
getNum1(12, 22, 33, 44, 55, 66);
