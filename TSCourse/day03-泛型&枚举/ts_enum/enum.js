//枚举
//格式: enum 枚举类型名字{值,值,值...}
// let flag: boolean = false;
// let num: number = 10;
// let str3: string = "老王";
// let arr: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var a = Gender.Male;
console.log(a);
