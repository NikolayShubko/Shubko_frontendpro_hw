let sum = 0;
function sumFunc(elem) {
  return (sum += elem);
}
console.log(sumFunc(3));
console.log(sumFunc(5));
console.log(sumFunc(20));
