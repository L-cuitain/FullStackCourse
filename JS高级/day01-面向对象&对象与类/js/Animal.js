//动物类
class Animal{
    constructor(animalName){
        this.name = animalName
    }

    eat(){
        return `${this.name} 在吃草`;
    }
}