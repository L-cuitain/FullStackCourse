// interface Cat {
//     name: string
//     miao:() => string
//   }
// interface Dog {
//     name: string
//     wang: () => string
//   }
//   const Animal1 = (): Cat | Dog => {
function evaluatePrice(vehicle) {
    switch (vehicle.vType) {
        case "truck":
            return vehicle.capacity * Math.PI;
    }
}
var myTruck = { vType: "truck", capacity: 9.5 };
console.log(evaluatePrice(myTruck));
