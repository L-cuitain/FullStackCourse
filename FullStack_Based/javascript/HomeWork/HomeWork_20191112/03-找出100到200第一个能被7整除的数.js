//3.找到100到200之间第一个能被7整除的数字

//3.找到100到200之间第一个能被7整除的数字

//遍历100到200
for(let i = 100 ; i <= 200 ; i++){
    //判断i 是否能被7整除
    if(i % 7 == 0){
        //能就打印i
        console.log(i);
        //终止循环
        break;
    }
}