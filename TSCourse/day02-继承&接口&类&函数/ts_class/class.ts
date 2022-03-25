class Cat{
    private name:string;

    //构造函数
    constructor(name:string){
        this.name = name;
    };

    //存储器
    set fullName(name:string){
        this.name = name;
    }

    get fullName():string{
        return this.name;
    }

    getCat():void{
        console.log(this.name+"正在命名");
    }
}

class CatSon extends Cat{
    age: number

    constructor(age:number){
        super("1");
        this.age = age;
    }

    dadong(){
        console.log(`${this.age}`)
    }
}

let cat = new Cat("加菲猫");
console.log(cat.fullName);

cat.getCat();


//访问修饰符
//public
//公有的 可以在任何地方被访问到 默认所有的属性和方法都为public

//private
//私有的 不能在声明它的类的外部访问

//protected
//受保护的 和private类似 区别是此修饰符在子类中也允许访问
