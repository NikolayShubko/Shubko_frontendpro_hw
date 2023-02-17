//1
function greetings(name, time) {
  const splited = time.split(" ");
  let timeInMS = 0;
  switch (splited[1]) {
    case "seconds":
      timeInMS = +splited[0] * 1000;
      break;
    case "minutes":
      timeInMS = +splited[0] * 60 * 1000;
      console.log(timeInMS);
      break;
    case "hours":
      timeInMS = +splited[0] * 60 * 60 * 1000;
      console.log(timeInMS);
      break;
    default:
      console.log("Something wrong");
  }
  setTimeout(() => {
    console.log(`Hello ${name}`);
  }, timeInMS);
}
greetings("Bob", "5 seconds");

//2
const user = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};
const userJSON = JSON.stringify(user);
function serialize(obj) {
  if (typeof obj === "string") {
    return JSON.parse(obj);
  } else {
    return JSON.stringify(obj);
  }
}
console.log(serialize(user));
console.log(serialize(userJSON));
//3
function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
console.log(isJSON(user));
console.log(isJSON(userJSON));
