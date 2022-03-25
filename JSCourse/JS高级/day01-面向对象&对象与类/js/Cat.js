//猫类
class Cat extends Animal{
    constructor(animalName){
        super(animalName);
    }


    toString(){
        return `${this.name}`;
    }
}