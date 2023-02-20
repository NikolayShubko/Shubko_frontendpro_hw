class Student {
  constructor(name, surname, birthYear, marks) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.marks = marks;
  }
  attendance = new Array(25);

  age() {
    const userAge = 2023 - Number(this.birthYear);
    console.log(`${this.name} is ${userAge} years old`);
  }
  averageMark() {
    return this.marks.reduce((acc, curr) => acc + curr) / this.marks.length;
  }
  attendaceAverage() {
    return (
      this.attendance.reduce((acc, curr) => acc + curr) / this.attendance.length
    );
  }
  present() {
    this.attendance.shift();
    this.attendance.push(true);
  }
  absent() {
    this.attendance.shift();
    this.attendance.push(false);
  }
  summary() {
    const score = this.averageMark();
    const att = this.attendaceAverage();
    if (att > 0.9 && score > 90) {
      console.log(`${this.name}Молодець!`);
    } else if (att > 0.9 || score > 90) {
      console.log(`${this.name} Добре, але можна краще!`);
    } else {
      console.log(`${this.name} Редиска!`);
    }
  }
}
const person1 = new Student(
  "Bob",
  "Johnson",
  2000,
  [
    100, 1, 100, 90, 95, 100, 95, 100, 98, 99, 97, 98, 100, 97, 96, 92, 93, 94,
    100, 95, 99, 91, 92, 93, 94,
  ]
);
const person2 = new Student(
  "Jane",
  "Smith",
  1996,
  [
    1, 1, 1, 1, 95, 100, 95, 100, 98, 99, 97, 98, 100, 97, 96, 92, 93, 94, 100,
    95, 99, 91, 92, 93, 94,
  ]
);
person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.absent();
person1.present();
person1.present();
person1.present();
person1.present();
person1.absent();
person1.present();
person1.present();
person1.present();
person1.present();
person1.absent();
person1.age();
console.log(person1.averageMark());
console.log(person1.attendaceAverage());
person1.summary();

person2.absent();
person2.absent();
person2.absent();
person2.absent();
person2.absent();
person2.present();
person2.present();
person2.present();
person2.present();
person2.present();
person2.present();
person2.present();
person2.present();
person2.present();
person2.absent();
person2.present();
person2.present();
person2.present();
person2.present();
person2.absent();
person2.present();
person2.present();
person2.present();
person2.present();
person2.absent();

person2.age();
console.log(person2.averageMark());
console.log(person2.attendaceAverage());
person2.summary();
