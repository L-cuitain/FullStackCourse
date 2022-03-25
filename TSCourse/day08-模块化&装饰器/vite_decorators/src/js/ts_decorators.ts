//装饰器是什么
//它是一个表达式
//该表达式被执行后 返回一个函数
//函数的入参分别为 target , name 和 descriptor
//执行该函数后 可能返回 descriptor对象 用于配置 target 对象

//需要在tsconfig中将experimentalDecorators设置为true

//装饰器的分类
// 类装饰器(Class decorators)
// 属性装饰器(Property decorators)
// 方法装饰器(Method decorators)
// 参数装饰器(Parameter decorators)

//类装饰器
//类装饰器声明:
// declare type classDecorator = <TFunction extends Function>{
//     target: TFunction
// } => TFunction | void;

//类装饰器 就是用来装饰类 它接收一个参数:
// target:TFunction -被装饰的类

// function Greeter(target: Function):void{
//     target.prototype.greet = function():void{
//         console.log("Hello Semlinker");
//     };
// }

// @Greeter
// class Greeting{
//     constructor(){}
// }

// let myGreeting = new Greeting();
// myGreeting.greet();

// function Greeter(greeting: string){
//     return function(target:Function){
//         target.prototype.greet = function(): void{
//             console.log(greeting);
//         };
//     };
// }

// @Greeter("Hello Ts")
// class Greeting{
//     constructor(){}
// }

// let myGreeting = new Greeting();
// myGreeting.greet();

//属性装饰器
//属性装饰器声明:
// declare type PropertyDecorator1 = (target: Object , propertyKey: string | symbol) => void;

//属性装饰器 用来装饰类的属性 接收两个参数:
// target: Object -被装饰的类
// propertyKey: string | symbol -被装饰类的属性名
// function logProperty(target: any , key:string){
//     delete target[key];

//     const backingField = "_"+key;

//     Object.defineProperty(target,backingField,{
//         writable : true,
//         enumerable: true,
//         configurable: true       
//     });

//     const getter = function(this:any){
//         const currVal = this[backingField];
//         console.log(`Get: ${key} => ${currVal}`);
//         return currVal;
//     };

//     const setter = function(this: any , newVal: any){
//         console.log(`Set: ${key} => ${newVal}`);
//         this[backingField] = newVal;
//     };

//     Object.defineProperty(target,key,{
//         get: getter,
//         set: setter,
//         enumerable: true,
//         configurable: true
//     });
// }

// class Person{
//     @logProperty
//     public name: string;

//     constructor(name: string){
//         this.name = name;
//     }
// }

// const p1 = new Person("smelinker");
// p1.name = "kakuqo";


//方法装饰器
//declare type MethodsDecorator = <T>(target:Object , propertyKey: string | symbol,descriptor: TypePropertyDescript<T>) => TypedPropertyDescriptor<T> | void;
//方法装饰器 用来装饰类的方法 接收三个参数:
//target:Object -被装饰的类
//propertyKey: string | symbol -方法名
//descriptor: TypePropertyDescript -属性描述符
// function test(target: any , proertyKey: string , descriptor: PropertyDescriptor){
//     console.log(target);
//     console.log(proertyKey);
//     console.log(descriptor);
    
//     descriptor.value = function(){
//         console.log("滑稽");
//     }
// }

// class Person1{
//     @test
//     sayHello(){
//         console.log("dafas");
//     }

//     static sayAge(){
//         console.log("gagasdfds");        
//     }
// }

// let zd = new Person1();

// console.log(zd);


//参数装饰器
//参数装饰器声明:
//declare type ParameterDecorator = (target:Object , propertyKey: string | symbol) , parameterIndex: number ) => void
//参数装饰器 用来装饰函数参数  接收三个参数:
//target:Object -被装饰的类
//propertyKey: string | symbol -方法名
//parameterIndex: number -方法中参数的索引值
// function Log(target: Function , key: string,parameterIndex:number){
//     let functionLogged = key || target.prototype.constructor.name;
//     console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has been decorated`);
// }

// class Greeter{
//     greeting: string;
//     constructor(@Log phrase: string){
//         this.greeting = phrase;
//     }
// }

// const gets = new Greeter("123");
// console.log(gets);



//访问器装饰器
//访问器装饰器声明在一个访问器的声明之前
//访问器装饰器应用于访问器的属性描述符并且可以用来监听 修改或替换一个访问器的定义
//访问器装饰器表达式会在运行时当作函数被调用 传入下列三个参数:
//对于静态成员来说是类的构造函数 对于实例成员是类的原型对象
//成员的名字
//成员的属性描述符

//注意:
//Typescript 不允许同时装饰一个成员的get和set访问器
//取而代之 一个成员的所有装饰器必须应用在文档顺序的第一个访问器上

//target 对于静态方法而言就是当前的类 对于实例方法而言就是当前的实例
//proertyKey: 被绑定方法的名字
//desriptor: 被绑定方法的属性描述符
function test(target: any , proertyKey: string , desriptor: PropertyDescriptor){
    desriptor.set = function(value: string){
        target.name = value;
    }

    desriptor.get =()=> {
        return target.name + "********";
    }
}

class Person{
    private name:string
    constructor(name:string){
        this.name = name;
    }

    @test
    public get _name(): string{
        return this.name;
    }

    public set _name(v: string){
        this.name = v;
    }
}

let zm = new Person('zm');
zm._name = 'asdfas'
console.log(zm._name);
