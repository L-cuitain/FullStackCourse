// 需求: 求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.

//定义变量 sum
var sum = 0;

//for循环遍历  1 - 100 之间的数
for(var i = 1 ; i <= 100 ; i++){

    //判断 如果能同时被 3  和 5 整除
    if(i % 3 == 0 && i % 5 == 0){

        //将 i 赋值给 sum
        sum += i;
    }
}

//打印sum
console.log(sum);