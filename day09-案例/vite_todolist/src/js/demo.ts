function decoratorA(constructor: any) {
    console.log("我是装饰器A");
  }
  
  function decoratorFactoryA() {
    console.log("我是装饰器工厂A");
    return function (constructor: any) {
      console.log("我是装饰器工厂A的装饰器");
    }
  }
  
  function decoratorFactoryB() {
    console.log("我是装饰器工厂B");
    return function (constructor: any) {
      console.log("我是装饰器工厂B的装饰器");
    }
  }
  
  function decoratorB(constructor: any) {
    console.log("我是装饰器B");
  }
  
  
  // 类声明前，绑定类装饰器
  @decoratorFactoryB()
  @decoratorA
  @decoratorB
  @decoratorFactoryA()
  class Stuff {}