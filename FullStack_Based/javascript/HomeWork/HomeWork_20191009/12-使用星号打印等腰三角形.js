
//创建 for 循环 遍历 i 当做三角形的高 范围在 0-5
for(var i = 0 ; i < 5 ; i++){

    //创建空字符串  存入 三角形形状
    var str = "";
    //创建 内一循环  加大每行的间距
    for(var j = 0 ; j < 5-i ; j++){
        str += " ";
    }
    //创建 内二循环  添加每行的三角形
    for(var k = 0 ; k < i ; k++){
        str += " *";
    }
    //打印字符串 的三角形形状
    console.log(str);
}