//RegExp 构造函数 

//第一种情况  参数为字符串  第二个参数 表示 正则表达式的修饰符
var regex1 = new RegExp('xyz','i');

console.log(regex1);

//第二种情况  参数为正则表达式  会返回一个原有正则表达式的拷贝
var regex2 = new RegExp(/xyz/i);

console.log(regex2);

//
var regex3 = new RegExp(/abc/ig,'i');
console.log(regex3);


