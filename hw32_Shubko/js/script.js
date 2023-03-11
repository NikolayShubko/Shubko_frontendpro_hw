const myDay = new Promise(function (resolve) {
  setTimeout(() => resolve("wake up, "), 3000);
})
  .then((result) => {
    return result + "Brush teeth, ";
  })
  .then((result) => {
    return result + "eat breakfast, ";
  })
  .then((result) => {
    return result + " walk with a dog, ";
  })
  .then((result) => {
    return result + " go for a work.";
  });
myDay.then((result) => console.log(result));
