class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  about() {
    console.log(`${this.name}, ${this.age} years old`);
  }
}
class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
  }
  owner = null;
  newOwner(item) {
    item.age > 18
      ? (this.owner = item)
      : console.log(`WOW!${item.name} you are under 18 y.o.`);
  }
  aboutCar() {
    console.log(
      `Brand : ${this.brand}, Model : ${this.model}, Year : ${this.year}, License Plate : ${this.licensePlate} `
    );
    console.log("Owner invofrmation ");
    this.owner === null
      ? console.log("This car has no owner")
      : this.owner.about();
  }
}
const person1 = new Person("Bob", 19);
const person2 = new Person("Jane", 25);
const person3 = new Person("Kate", 17);

const lamborghini = new Car("Lamborghini", "aventador", 2010, "BH0000HB");
const mercedes = new Car("Mercedes", "clk300", 2015, "BH0001HB");
const ford = new Car("Ford", "mustang", 2017, "BH0002HB");

lamborghini.newOwner(person1);
mercedes.newOwner(person2);
ford.newOwner(person3);

lamborghini.aboutCar();
mercedes.aboutCar();
ford.aboutCar();
