//继承
class Shape{
    protected Area: number;

    //构造函数
    constructor(Area:number){
        this.Area = Area;
    }
}

//子类继承父类
class Circle extends Shape{
    disp():void{
        console.log("圆的面积: "+this.Area);
    }
}

var circle = new Circle(123);

circle.disp();