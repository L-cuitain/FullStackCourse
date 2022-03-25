//类型保护
//typeof
//判断参数的类型
//注意点:
//如果使用typeof来实现类型保护 , 那么只能使用 === / !==  不严格的: == !=
//如果使用typeof来实现类型保护 , 那么只能保护 number/string/boolean/symbol类型
function getNum(x:number | string){
    if(typeof x === 'string'){
        console.log("123");
    }else{
        console.log(456);
    }
}

getNum("zas");



//instanceof
//可以用于判断是否是此类的成员
// interface Padder{
//     getPaddingString(): string;
// }

// class SpaceRepeatingPadder implements Padder{
//     constructor(private numSpaces: number){}
//     getPaddingString(){
//         return Array(this.numSpaces + 1).join(" ");
//     }
// }

// class StringPadder implements Padder{
//     constructor(private value: string){}
//     getPaddingString(){
//         return this.value;
//     }
// }

// let padder: Padder = new SpaceRepeatingPadder(6);

// if(padder instanceof SpaceRepeatingPadder){}

// class Dog{
//     name: string
//     constructor(){
//         this.name = "fadsd";
//     }
// }

// class Cat{
//     age: number;
//     constructor(){
//         this.age = 3;
//     }
// }


// function fn():string|number{
//     //生成随机数
//     let num = Math.random();
//     let res = num >= 0.5 ? new Dog() : new Cat()

//     if(res instanceof Dog){
//         return res.name;
//     }else{
//         return res.age;
//     }
// }


//in
//可以安全检查一个对象上是否存在一个属性
// interface Admin{
//     name: string;
//     privileges: string[];
// }

// interface Employee{
//     name: string;
//     startDate: Date;
// }

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee){
//     console.log("Name: " + emp.name);
//     if("privileges" in emp){
//         console.log("Privileges: " + emp.privileges);
//     }
//     if("startDate" in emp){
//         console.log("Start Date: " + emp.startDate);
//     }
// }
