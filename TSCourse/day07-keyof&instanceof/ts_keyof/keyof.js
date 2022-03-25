//keyof操作符
//可以获取某种类型的所有键 其返回值为联合类型
// interface Person{
//     name:string;
//     age:number;
//     location: string;
// }
// type k1 = keyof Person;  // name | age | location
// type k2 = keyof Person[];   // number | length | push | concat
// type k3 = keyof {[x:string]:Person};  // string | number
//除接口外 keyof也可以用于操作类
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = "Semlinker";
    }
    return Person1;
}());
var sname;
sname = "name";
console.log(sname);
