const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
function generateKeys(length, item) {
  let generated = "";
  for (let i = 0; i < length; i++) {
    generated += item.charAt(Math.random() * item.length);
  }
  return generated;
}

const key = generateKeys(16, characters);
console.log(key);
