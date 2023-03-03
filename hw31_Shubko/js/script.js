//1
const numbersArray = [1, 1, 2, 3, 4, 5, 5, 5, 6];
const setArray = new Set(numbersArray);
const uniqueArray = new Array(...setArray);
console.log(uniqueArray);

//2
const userBob = {
  name: "Bob",
};
const userJane = {
  name: "Jane",
};
const mapped = new Map();
mapped.set(userBob, () => console.log("Hello Bob nice to see you"));
mapped.set(userJane, () => console.log("How your kids doing Jane?"));
function greetUser(arg) {
  const sayHiFunc = mapped.get(arg);
  return sayHiFunc();
}
greetUser(userBob);
greetUser(userJane);

//3
const map = new Map([
  ["name", "Bob"],
  ["country", "Chile"],
]);
function convertFunc(arg) {
  if (arg instanceof Map) {
    return Object.fromEntries(arg);
  }
  return new Map(Object.entries(arg));
}
console.log(convertFunc(userBob));
console.log(convertFunc(map));
