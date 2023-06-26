const productsHolder = document.querySelector(".products-holder");
const budivlya = document.querySelector("#bydivlya");
const maydanchik = document.querySelector("#maydanchik");
const bydova = document.querySelector("#bydova");
const primishennya = document.querySelector("#primishennya");

const renderGoods = (products) => {
  productsHolder.innerHTML = "";
  const productsList = document.createElement("ul");
  productsList.classList.add("product-list");
  products.forEach((elem) => {
    const productItem = document.createElement("li");
    const productLink = document.createElement("a");
    const productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productLink.classList.add("product-link");
    productItem.classList.add("product-item");
    productImage.src = elem.image;
    productLink.textContent = `${elem.description}`;

    productImage.addEventListener(
      "click",
      () => (window.location.href = `product-details.html?id=${elem.id}`)
    );

    productItem.append(productLink, productImage);
    productsList.appendChild(productItem);
  });
  productsHolder.appendChild(productsList);
};

budivlya.addEventListener("click", () => {
  fetch("https://648a0b1b5fa58521cab0b14c.mockapi.io/KEV/products")
    .then((resposne) => resposne.json())
    .then((product) =>
      renderGoods(product.filter((item) => item.type === "будівля"))
    );
});

maydanchik.addEventListener("click", () => {
  fetch("https://648a0b1b5fa58521cab0b14c.mockapi.io/KEV/products")
    .then((resposne) => resposne.json())
    .then((product) =>
      renderGoods(product.filter((item) => item.type === "майданчик"))
    );
});
bydova.addEventListener("click", () => {
  fetch("https://648a0b1b5fa58521cab0b14c.mockapi.io/KEV/products")
    .then((resposne) => resposne.json())
    .then((product) =>
      renderGoods(
        product.filter((item) => item.type === "тимчасова будова (споруда)")
      )
    );
});
primishennya.addEventListener("click", () => {
  fetch("https://648a0b1b5fa58521cab0b14c.mockapi.io/KEV/products")
    .then((resposne) => resposne.json())
    .then((product) =>
      renderGoods(product.filter((item) => item.type === "приміщення"))
    );
});
fetch("https://648a0b1b5fa58521cab0b14c.mockapi.io/KEV/products")
  .then((resposne) => resposne.json())
  .then((product) => {
    renderGoods(product);
    const sortBtn = document.querySelector("#sortBtn");
    const sortType = document.querySelector("#filter");

    sortBtn.addEventListener("click", () => {
      renderGoods(sortProducts(product, sortType.value));
    });
  });

const sortProducts = (data, sortType) => {
  return data.sort((a, b) =>
    sortType === "low" ? a.price - b.price : b.price - a.price
  );
};
