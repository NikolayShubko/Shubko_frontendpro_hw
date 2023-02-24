function isItToday(ms) {
  const now = new Date();
  const date = new Date(ms);
  return now.getDate() === date.getDate() ? true : false;
}
console.log(isItToday(1677248727000));
console.log(isItToday(1677162327000));

function msToDate(milliseconds) {
  const date = new Date(milliseconds);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  day < 10 ? (day = "0" + day) : day;
  month < 10 ? (month = "0" + month) : month;
  hours < 10 ? (hours = "0" + hours) : hours;
  minutes < 10 ? (minutes = "0" + minutes) : minutes;
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}
console.log(msToDate(1675483527000));

function differencesInTime(millisec) {
  const now = new Date(1677252600000);
  const date = new Date(millisec);
  const ms = now.getTime() - date.getTime();
  const seconds = ms / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  return ms > 0
    ? `С этого момента прошло ${ms} миллисекунд, ${seconds} секунд, ${minutes} минут,  ${hours} часов`
    : `До  этого момента ${ms * -1} миллисекунд, ${seconds * -1} секунд, ${
        minutes * -1
      } минут,  ${hours * -1} часов`;
}
console.log(differencesInTime(1677283200000));
console.log(differencesInTime(1677223800000));
