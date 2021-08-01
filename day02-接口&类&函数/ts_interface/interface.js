//接口 
//可以用来规范数组的形状
//无法赋值 只读属性
// myPerson2.name = "zhangs1";
myPerson2.birthday = "123";
var CrazyClass = /** @class */ (function () {
    function CrazyClass(hello) {
        this.hello = hello;
    }
    return CrazyClass;
}());
var crazy = new CrazyClass(421);
console.log(crazy.hello);
var fun = function (x, y) {
    return (x + " " + y);
};
var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.behavior = function () {
        console.log(this.name + " " + this.age);
    };
    return Dog;
}());
var dog = new Dog("里斯", 123);
dog.behavior();
var drink = /** @class */ (function () {
    function drink() {
    }
    return drink;
}());
// interface和type区别
// interface能够声明合并
// type可以声明基本类型别名 联合类型 元组等类型
// type语句中还可以使用typeof获取实例的 类型进行赋值
