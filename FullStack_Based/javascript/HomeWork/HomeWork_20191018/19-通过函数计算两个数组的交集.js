//19.给定两个数组，编写一个函数来计算它们的交集。

//分析:
//定义方法  遍历两个传进方法中的数组
//判断两个数组中是否有重复元素  如果有就是交集
//将这几个元素存入 新数组中
//返回新数组  打印  



//步骤:
//定义两个数组
var arr1 = [12,31,23,41,425,52];
var arr2 = [35,23,552,232,142,12];

//调用方法
console.log(getArr(arr1,arr2));


//定义方法
function getArr(arr1,arr2){

    //定义新数组
    var newArr = [];

    //遍历两个数组
    for(var i = 0 ; i < arr1.length ; i++){
        for(var j = 0 ; j <arr2.length ; j++){
            //如果两个数组中有重复元素
            if(arr1[i] == arr2[j]){
                //将这个元素 添加到 新数组
                newArr[newArr.length] = arr1[i];
            }
        }
    }
    //返回新数组
    return newArr;
}
