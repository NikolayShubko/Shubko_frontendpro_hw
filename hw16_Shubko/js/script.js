const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr, item) {
  arr.splice(arr.indexOf(item), 1);
  return arr;
}
console.log(removeElement(array, 5));
