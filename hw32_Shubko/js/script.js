const wakeUp = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("Проснуться"));
  }, 2000);
});

const eatBreakfast = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("Позавтракать"));
  }, 1000);
});

const goForAWalk = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("Прогулка с собакой"));
  }, 3000);
});

const startWork = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("Начать работу"));
  }, 4000);
});

wakeUp.then(() => eatBreakfast.then(() => goForAWalk.then(() => startWork)));
