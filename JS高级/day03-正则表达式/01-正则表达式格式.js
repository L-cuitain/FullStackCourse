//以数字开头 并以abc结尾的字符串
var str = 'google runoob taobao';
var patt1 = /^[0-9]+abc$/;
console.log(str.match(patt1));


//普通字符 [ABC] 匹配 [] 中的所有字符  
var patt2 = /[aeiou]/g;
console.log(str.match(patt2));



//普通字符 [^ABC]  匹配除了 [] 中的所有字符
var patt3 = /[^aeiou]/g;
console.log(str.match(patt3));


//普通字符 [A-Z]  匹配 A-Z 这个区间的字符 (大写)
var str1 = 'Google Runoob Taobao';
var patt4 = /[A-Z]/g;
console.log(str1.match(patt4));


//普通字符 [\s\S] 匹配所有  \s是匹配所有的空白符   \S 非空白符  包括换行
var patt5 = /[\s\S]/g;
console.log(str.match(patt5));


//普通字符 [\w] 匹配字母 数字 下划线  等价于[A-Za-z0-9_]
var patt6 = /\w/g;
console.log(str.match(patt6));


//$ 匹配输入字符串的结尾位置


//  /查找内容/  查找第一次匹配项
var n1 = str.match(/runoob/);
console.log(n1);


// /查找内容/g  查找所有匹配项
var n2 = str.match(/runoob/g);
console.log(n2);


// /g  区分大小写
var n3 = str.match(/RUNoob/g);
console.log(n3);
// /gi  不区分大小写
var n4 = str.match(/RUNoob/gi);
console.log(n4);


// m修饰符可以使用 ^ 和 $ 匹配一段文本中每行的开始和结束位置
var str2 = 'runobgoogle\ntabao\nrunoobweibo';
var n5 = str2.match(/^runoob/g);   //匹配一个
var n6 = str2.match(/^runoob/gm);  //多行匹配
console.log(n6);