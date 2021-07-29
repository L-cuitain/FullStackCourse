//类型守卫
//在一个条件块中使用 instanceof 和 typeof运算符  typescript会推导出在条件块中的变量类型

function useStr(str: string | number){
    if(typeof str == 'string'){
        //此时str已经为string类型 可以使用字符串的方法
        str.substr(1,2);
    }else{
        //现在为number类型  判断已经排除了string类 所以为number类型
        // str.substr(1,2);  //error
    }

    //此时也会报错 还不确定str的类型
    // str.substr(1,2);  //error
}



