const carOptions = {
  move: () => console.log("move"),
  stop: () => console.log("stop"),
  door: () => console.log("open doors to side"),
};
const custom = {
  door: () => console.log("open doors to top"),
};
function Car(model) {
  this.model = model;
}
function CustomCar(model) {
  (this.model = model), (this.__proto__.door = custom.door);
}
Car.prototype = carOptions;
CustomCar.prototype = new Car();
const somecar = new Car("somecar");
const lamborghini = new CustomCar("Lamborghini");
console.log(somecar.move, somecar.door);
console.log(lamborghini.move, lamborghini.door);
