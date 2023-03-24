const div = document.getElementById("images-holder");
const image = document.createElement("img");
const imagesArray = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

function getRandomImage(array) {
  const img = array[Math.floor(Math.random() * 9)];
  console.log(img);
  return img;
}
function setImage(picture) {
  picture.setAttribute("src", `images/${getRandomImage(imagesArray)}`);
  picture.style.width = "720px";
  picture.style.height = "405px";
  return picture;
}

div.appendChild(setImage(image));
