//6.  var arr = [1,1,2,2,3,4,5,4,3,2,1], 打印出数字2出现的次数。


//分析
//定义计数器  统计数字2在数组中出现的次数
//循环遍历数组  找到数字2  没找到一次  计数器自增


//步骤:

//创建变量arr
var arr = [1,1,2,2,3,4,5,4,3,2,1]

//创建计数器
var count = 0;

//循环遍历数组
for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] == 2){
        count++;
    }
}

console.log("数字2在数组中出现的次数为: "+count);
