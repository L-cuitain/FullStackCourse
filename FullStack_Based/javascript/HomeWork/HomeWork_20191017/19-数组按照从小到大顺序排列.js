//19.按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。

//分析:
//运用冒泡排序
//创建双层for循环
//外层遍历轮数
//内层遍历一轮循环几次
//条件判断 如果前面元素  大于 后面元素
//创建临时变量  进行元素互换




//步骤:
//定义数组
var arr= [10, 5, 34, 59, 98];

//冒泡排序

//创建外层循环遍历几轮数组元素
for(var i = 0 ; i < arr.length-1 ; i++){
    //创建内层循环  一轮循环几次
    for(var j = 0 ; j < arr.length-1-i ; j++){

        //判断 如果 前面元素 大于  后面元素
        if(arr[j] > arr[j+1]){

            //创建临时变量保存 元素  将元素值进行互换  最后将临时变量赋值给下一个元素
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

//打印
console.log(arr);
