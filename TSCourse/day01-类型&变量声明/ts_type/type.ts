//any类型 任意类型 变量值会动态改变时使用  
let s1 : any = "123";
s1 = 123;
s1 = true;

console.log(s1);

//数字类型 双精度64位浮点  可以表示整数和分数
let s2 : Number = 0b1010; //不同进制都可以表示

//字符串类型 
let num : Number = 13;
let s3 : String = `今年 ${num} 岁`;

//布尔类型
let s4 : Boolean = true;

//数组类型
// let s5 : Number[] = [1 , 2];

//或 数组泛型
let s5 : Array<number> = [1 , 2];

//元组 元组类型用来表示已知元素数量的类型的数组
// 数组特点
// ts中的数组和js中的数组
// js中数组元素可以为任意类型
// js中的数组长度可以随意变化

// 元组特点
// ts中的元组的元素数据类型是对号入座
// ts中的数组长度不能随意变化
let s6 : [String , Number];
s6 = ['滑稽',1];  //根据类型顺序赋值


//枚举 枚举类型用于定义数值集合  如果不赋值 则按顺序 每次加 1  如果给参数赋值 则参数后的值从 赋值参数后依次加 1 用于 下拉列表 和 判断男女选项
enum Color{Red , Green=3 , Blue};
let c : Color = Color.Blue;
console.log(c);  //输出 4

//void 用于标识方法返回值的类型 表示该方法没有返回值
function hello() : void{
    alert("Hello World");
}

//null 表示对象缺失

//undefined 用于初始化变量为一个未定义的值

//never never是其他类型(包括 null 和 undefined) 的子类型 代表从不会出现的值


//类型断言
//可以手动指定一个值的类型 即允许变量从一种类型改变为另一种类型
var str = "1";
var str2:number = <number> <any> str;
console.log(str2);

//作用域
var global_num = 12;  //全局变量
class Numbers{
    num_val = 13; //实例变量
    static sval = 10;  //静态变量

    storeNum() : void{
        var local_num = 14;  //局部变量
    }
}

console.log("全局变量为: "+ global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("实例变量: "+obj.num_val);