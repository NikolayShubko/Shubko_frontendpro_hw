const productInfo = document.getElementById("product-info");
const modal = document.getElementById("modal");
const returnBtn = document.querySelector(".return-btn");
const submitBtn = document.querySelector(".modal-btn");

const productID = window.location.href.match(/\?id=(\d+)/)[1];
console.log(productID);
fetch(
  `https://648a0b1b5fa58521cab0b14c.mockapi.io/KEV/products?id=${productID}`
)
  .then((resposne) => resposne.json())
  .then((product) => {
    renderUserDetails(...product);
  });

const showModal = () => {
  modal.style.display = "block";
  productInfo.style.display = "none";
};

const renderUserDetails = (product) => {
  const imageHolder = document.createElement("div");
  const image = document.createElement("img");
  const infoHolder = document.createElement("div");
  const productHeader = document.createElement("h2");
  const productDescription = document.createElement("p");
  const productPrice = document.createElement("span");
  const productArea = document.createElement("p");
  const productAddress = document.createElement("p");
  const productButton = document.createElement("button");
  const buyHolder = document.createElement("div");
  productButton.classList.add("buy-btn");
  buyHolder.classList.add("buy-block");
  infoHolder.classList.add("product-description");
  image.classList.add("product-image");
  productButton.textContent = "Оформити заяву";
  productHeader.textContent = product.description;
  productAddress.textContent = `${product.address}`;
  productDescription.textContent = `${product.description}`;
  productArea.textContent = `Загальна площа : ${product.area}`;
  productPrice.textContent = `₴${product.price}`;
  image.src = product.image;
  buyHolder.append(productPrice, productButton);
  infoHolder.append(
    productHeader,
    productAddress,
    productDescription,
    productArea,
    buyHolder
  );
  productButton.addEventListener("click", showModal);
  imageHolder.appendChild(image);
  productInfo.append(imageHolder, infoHolder);
};
returnBtn.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "none";
  productInfo.style.display = "flex";
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "none";
  productInfo.style.display = "flex";
});
