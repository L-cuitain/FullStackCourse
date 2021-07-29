//函数
//函数可选参数 ?标识符
let fn = function(x:number , y?:number){
    if(y){
        return x + y;
    }else{
        return x;
    }
}

fn(12);


//参数默认值
let fn1 = function(x:number , y:number = 3){
    return x + y;
}

fn1(12);


//rest参数(剩余参数)
let getNum1 = function(x:number , ...rest:number[]){
    for(let i = 0 ; i < rest.length ; i++){
        console.log(rest[i]);
        
    }
}

getNum1(12,22,33,44,55,66);
