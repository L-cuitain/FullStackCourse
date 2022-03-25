//非空断言
//在上下文中当类型检查器无法断言类型时 一个新的后缀表达式操作符 ! 可以用于断言操作对象是 非null 和 非 undefined 类型 
//作用: 忽略变量的 undefined | null 使程序不会抛出可能不存在的错误 表明此值肯定存在 从而不会产生编译问题
// function notNull(str: object | undefined | null){
//     //
//     let str1 = str!;
//     console.log(str1);
// }
// notNull(null);
function notNull(str) {
    // let str1 = null;
    var str1 = str;
    console.log(str1);
}
notNull();
