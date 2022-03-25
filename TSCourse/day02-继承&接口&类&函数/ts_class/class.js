var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cat = /** @class */ (function () {
    //构造函数
    function Cat(name) {
        this.name = name;
    }
    ;
    Object.defineProperty(Cat.prototype, "fullName", {
        get: function () {
            return this.name;
        },
        //存储器
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Cat.prototype.getCat = function () {
        console.log(this.name + "正在命名");
    };
    return Cat;
}());
var CatSon = /** @class */ (function (_super) {
    __extends(CatSon, _super);
    function CatSon(age) {
        var _this = _super.call(this, "1") || this;
        _this.age = age;
        return _this;
    }
    CatSon.prototype.dadong = function () {
        console.log("" + this.age);
    };
    return CatSon;
}(Cat));
var cat = new Cat("加菲猫");
console.log(cat.fullName);
cat.getCat();
//访问修饰符
//public
//公有的 可以在任何地方被访问到 默认所有的属性和方法都为public
//private
//私有的 不能在声明它的类的外部访问
//protected
//受保护的 和private类似 区别是此修饰符在子类中也允许访问
