interface Cat {
    name: string
    miao:() => string
  }
interface Dog {
    name: string
    wang: () => string
  }
  const Animal1 = (): Cat => {
    return {
        name: "",
        miao: ():string => {return "2333"}
    }
  }
  let obj1 = Animal1();
  obj1.miao()  //报错


//   interface Motorcycle {
//     vType: "motorcycle"; 
//     make: number;
//   }
//   interface Car {
//     vType: "car"; 
//     transmission: number;
//   }
//   interface Truck {
//     vType: "truck"; 
//     capacity: number; 
//   }
//   type Vehicle = Motorcycle | Car | Truck;
//   function evaluatePrice(vehicle: Vehicle) {
//     switch (vehicle.vType) {
//         case "truck":
//          return vehicle.capacity * Math.PI;     
//     }
//   }
//   const myTruck: Truck = { vType: "truck", capacity: 9.5 };
//   console.log(evaluatePrice(myTruck));
  


  