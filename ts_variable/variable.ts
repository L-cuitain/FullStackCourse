//声明变量
//var [变量名] : [类型] = 值;
var username : String = "滑稽";

//声明变量并初始值 但不设置类型  该变量可以为任何类型
// var [变量名] = 值
var score1 : number = 50;
var score2 : number = 4.2;

var sum = score1 + score2;
console.log(sum);

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

