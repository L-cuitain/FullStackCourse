//any类型 任意类型 变量值会动态改变时使用  
var s1 = "123";
s1 = 123;
s1 = true;
console.log(s1);
//数字类型 双精度64位浮点  可以表示整数和分数
var s2 = 10; //不同进制都可以表示
//字符串类型 
var num = 13;
var s3 = "\u4ECA\u5E74 " + num + " \u5C81";
//布尔类型
var s4 = true;
//数组类型
// let s5 : Number[] = [1 , 2];
//或 数组泛型
var s5 = [1, 2];
//元组 元组类型用来表示已知元素数量的类型的数组
var s6;
s6 = ['滑稽', 1]; //根据类型顺序赋值
//枚举 枚举类型用于定义数值集合  如果不赋值 则按顺序 每次加 1  如果给参数赋值 则参数后的值从 赋值参数后依次加 1 用于 下拉列表 和 判断男女选项
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c); //输出 4
//void 用于标识方法返回值的类型 表示该方法没有返回值
function hello() {
    alert("Hello World");
}
//null 表示对象缺失
//undefined 用于初始化变量为一个未定义的值
//never never是其他类型(包括 null 和 undefined) 的子类型 代表从不会出现的值
