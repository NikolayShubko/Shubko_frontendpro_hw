class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}
class Apartment {
  residents = new Array();
  addResident(item) {
    this.residents.push(item);
  }
}
class House {
  apartmentsArray = [];
  constructor(max) {
    this.maxApartments = max;
  }
  addApaprtment(item) {
    if (this.apartmentsArray.length < this.maxApartments) {
      this.apartmentsArray.push(item);
    } else {
      console.log("This house is full!");
    }
  }
}
const firstPerson = new Person("John", "Male");
const secondPerson = new Person("Bob", "Male");
const thirdPerson = new Person("Jane", "Female");
const fourthPerson = new Person("Kate", "Female");

const firstApartment = new Apartment();
const secondApartment = new Apartment();
const thirdApartment = new Apartment();
const fourthApartment = new Apartment();

firstApartment.addResident(firstPerson);
secondApartment.addResident(secondPerson);
thirdApartment.addResident(thirdPerson);
fourthApartment.addResident(fourthPerson);

const firstHouse = new House(3);

firstHouse.addApaprtment(firstApartment);
firstHouse.addApaprtment(secondApartment);
firstHouse.addApaprtment(thirdApartment);
firstHouse.addApaprtment(fourthApartment);

console.log(firstHouse);
