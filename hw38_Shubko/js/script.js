const getElement = (elem) => {
  return document.querySelector(elem);
};

const div = getElement(".slider");
const nextButton = getElement(".next");
const previousButton = getElement(".prev");
const image = getElement(".image");
previousButton.style.visibility = "hidden";

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

let currentIndex = 0;
const endIndex = imagesArray.length - 1;

function next() {
  if (currentIndex < endIndex) {
    currentIndex++;
    image.setAttribute("src", `images/${imagesArray[currentIndex]}`);
  }
  hideButtons();
}

function prev() {
  if (currentIndex > 0) {
    currentIndex--;
    image.setAttribute("src", `images/${imagesArray[currentIndex]}`);
  }
  hideButtons();
}

function hideButtons() {
  currentIndex === 0
    ? (previousButton.style.visibility = "hidden")
    : (previousButton.style.visibility = "visible");
  currentIndex === endIndex
    ? (nextButton.style.visibility = "hidden")
    : (nextButton.style.visibility = "visible");
}

const controls = (event) => {
  const eventClassList = event.target.classList;

  if (eventClassList.contains("next")) {
    next();
  }
  if (eventClassList.contains("prev")) {
    prev();
  }
};

div.addEventListener("click", controls);
