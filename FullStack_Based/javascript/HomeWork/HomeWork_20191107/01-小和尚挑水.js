//1.一小和尚挑水，要把水缸装满，而且每次只能挑5升水，水缸能容纳80升水。问：小和尚要挑几次才能把水缸挑满？

//定义计数器 计算要挑几次
var count = 0;

//定义初始表达式
var i = 5;

//while循环  在水缸不到80升水时
while(i <= 80){
    //i每次加5
    i+=5;
    //个数自增
    count++;
}
//打印
console.log(count);
