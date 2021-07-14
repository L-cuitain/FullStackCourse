//Number类型
var numberCount1 = new Number(12);

//Number对象属性
//MAX_VALUE 可表示最大数
console.log("最大值为: " + Number.MAX_VALUE);
//MIN_VALUE 可表示最小数
console.log("最小值为: " + Number.MIN_VALUE);
//NAN  非数字值
//NAN实例:
var month = 0;
if(month <= 0 || month > 12){
    month = Number.NaN;
    console.log("月份是:" + month);
} else{
    console.log("输入月份数值正确");
}

//NEGATIVE_INFINITY 负无穷大
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);

//POSITIVE_INFINITY 正无穷大
console.log("正无穷大:" + Number.POSITIVE_INFINITY);

//prototype  Number对象的静态属性
function employee(id: number , name: string){
    this.id = id;
    this.name = name;
}

var emp = new employee(123,'admin');
employee.prototype.email = "admin@123.com";
console.log(emp.email);

//constructor  返回对创建此对象的Number函数的引用


