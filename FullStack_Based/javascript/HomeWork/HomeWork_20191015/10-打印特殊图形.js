//10、利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成）

// ---*
// --***
// -*****
// *******
// -*****
// --***
// ---*


//分析:
//将菱形分两部分
//第一部分
// ---*
// --***
// -*****
// *******

//第二部分
// -*****
// --***
// ---*


//通过三层循环遍历 行数  -号  *号  存入空字符串  打印形状





//步骤:

//定义行数
var row = 4;

//第一部分
for(var i = 1 ; i <= row ; i++){

    var str = "";
    for(var j = 1 ; j <= row-i ; j++){

        str += "-";
    }

    for(var k = 1 ; k <= (2*i-1) ; k++){
        str += "*"
    }
    console.log(str);
    
}


//第二部分
for(var i = row-1 ; i >= 1 ; i--){

    var str = "";
    for(var j = 1 ; j <= row-i ; j++){

        str += "-";
    }

    for(var k = 1 ; k <= (2*i-1) ; k++){
        str += "*"
    }
    console.log(str);
    
}
