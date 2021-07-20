//循环
var count = 5;
var num1;
var factorial = 1;
for (num1 = count; num1 >= 1; num1--) {
    factorial *= num1;
}
console.log(factorial);
//for...of.. 可以遍历Arrays(数组) String(字符串) Maps(映射) Sets(集合)等
var someArray = [1, "String", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry);
}
