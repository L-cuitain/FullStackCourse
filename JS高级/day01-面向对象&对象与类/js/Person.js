class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    toString(){
        return(" name = " + this.name + " , age = " + this.age);
    }
}

//等同于

// Person.prototype = {
//     constructor() {},
//     toString() {}
// }


//类的新方法可以添加在prototype对象上  Object.assign方法可以方便一次向类添加多个方法
Object.assign(Person.prototype,{
    study(){
    console.log(`${this.name} 爱学习`);
    }
})

//prototype对象的  constructor属性 指向类的本身
PointerEvent.prototype.constructor === Person;