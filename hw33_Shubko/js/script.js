function* generateSequence(start, end) {
  for (let i = 0; i < 10; i++)
    yield Math.floor(Math.random() * (end - start + 1) + start);
}

let str = "";

for (let number of generateSequence(5, 15)) {
  str += number + " ";
}
console.log(str);

//2

const wakeUp = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Wake Up ");
  }, 2000);
});
const brushTeeth = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Brush Teeth ");
  }, 3000);
});

const breakfast = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Eat Breakfast ");
  }, 5000);
});

const myDaily = async () => {
  const first = await wakeUp;
  console.log(first);
  const second = await brushTeeth;
  console.log(second);
  const third = await breakfast;
  console.log(third);
};
myDaily();
