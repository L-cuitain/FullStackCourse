//循环
var count: number = 5;
var num1: number;
var factorial = 1;

for(num1 = count ; num1 >= 1 ; num1--){
    factorial *= num1;
}

console.log(factorial);

//for...of.. 可以遍历Arrays(数组) String(字符串) Maps(映射) Sets(集合)等
let someArray = [1,"String",false];

for(let entry of someArray){
    console.log(entry);
}