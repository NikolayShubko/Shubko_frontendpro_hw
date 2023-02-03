//1
function averageOf(arr) {
  const filtered = arr.filter((elem) => typeof elem === "number");
  const average = filtered.reduce((a, b) => a + b) / filtered.length;
  return average;
}
console.log(
  averageOf([2, "sd", "asdasd", "wqrbjq", 3, "qwq", 4, "dfkd", 5, 1, "wew"])
);
//2
function calculator(x, znak, y) {
  let done = null;
  switch (znak) {
    case (znak = "*"):
      done = x * y;
      return done;
    case (znak = "/"):
      done = x / y;
      return done;
    case (znak = "+"):
      done = x + y;
      return done;
    case (znak = "-"):
      done = x - y;
      return done;
    case (znak = "^"):
      done = Math.pow(x, y);
      return done;
    case (znak = "%"):
      done = x % y;
      return done;
    default:
      done = "Wrong sign";
      return done;
  }
}
const firstNumber = Number(prompt("Enter first Number"));
const secondNumber = Number(prompt("Enter second Number"));
const sign = prompt("Enter what you want to do with Numbers");
console.log(calculator(firstNumber, sign, secondNumber));

//3
function arrayFill(rows, columns) {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < columns; j++) {
      arr[i][j] = prompt("enter number");
    }
  }
  return arr;
}
const length = Number(prompt("Enter length"));
const height = Number(prompt("Enter height"));
console.log(arrayFill(length, height));

//4
function charactersRemove(string, chars) {
  const stringRemoved = string.split(`${chars}`).join("");
  return stringRemoved;
}
const stringToRemove = prompt("enter string");
const charactersToRemove = prompt("enter symbols to delete");
console.log(charactersRemove(stringToRemove, charactersToRemove));
