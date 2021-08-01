//交叉类型和联合类型
//联合类型
//格式: type1 | type2 | ...
//联合类型是多个类型中任意一个类型
var a; //声明a的类型
a = 123;
a = 'fagsa';
a = true;
// a = Symbol(); //没有该类型
//交叉类型
//格式:type1&type2&type3
//交叉类型是将多个类型合并为一个类型
var getNewObj = function (target, source) {
    var res = {};
    res = Object.assign(target, source);
    return res;
};
console.log(getNewObj({ name: "fasdf" }, { mobile: 124212 }));
