const images = document.querySelectorAll(".image-wrapper");
const counter = document.querySelectorAll(".counter");
images.forEach((elem, index) => {
  let count = 0;
  elem.addEventListener("click", () => {
    count++;
    counter[index].textContent = count;
  });
});
