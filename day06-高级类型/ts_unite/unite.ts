//可辨识联合

//1.什么是可辨识联合
//具有共同的可辨识特征
//一个类型别名 包含了具有共同的可辨识特征的类型的联合

//可辨识联合的完整性检查: 让ts来检测 可辨识联合类型是否实现完整
//1.开启严格模式 + 函数的返回值类型(常用的)
//2.Never(知道)

//正方形
interface Square{
    kind : "square";   //共同的可辨识特征
    size: number;
}

//长方形
interface Rectangle{
    kind: "rectangle"; //共同的可辨识特征
    width: number;
    height: number;  //width * height
}

//圆
interface Circle{
    kind: "circle";  //共同的可辨识特征
    radius: number;  //Math.PI * radius * radius
}

type Shape = Square | Rectangle | Circle;

//根据可辨识特征来相应的计算
function getArea(s: Shape){
    switch (s.kind) {
        case "square":
            return  s.size ** 2;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.radius ** 2; //** 代表幂
    }
}

console.log(getArea({kind: "square" , size:3}));



