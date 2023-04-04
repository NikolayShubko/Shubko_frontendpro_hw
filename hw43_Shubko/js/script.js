const products = [
  {
    categoryName: "Computer Parts",
    items: [
      {
        name: "Товар 1.1",
        price: 100,
        image: "https://example.com/image1.png",
        description: "Описание товара 1.1",
      },
      {
        name: "Товар 1.2",
        price: 200,
        image: "https://example.com/image2.png",
        description: "Описание товара 1.2",
      },
      {
        name: "Товар 1.3",
        price: 300,
        image: "https://example.com/image3.png",
        description: "Описание товара 1.3",
      },
    ],
  },
  {
    categoryName: "Monitors",
    items: [
      {
        name: "Товар 2.1",
        price: 50,
        image: "https://example.com/image4.png",
        description: "Описание товара 2.1",
      },
      {
        name: "Товар 2.2",
        price: 150,
        image: "https://example.com/image5.png",
        description: "Описание товара 2.2",
      },
      {
        name: "Товар 2.3",
        price: 250,
        image: "https://example.com/image6.png",
        description: "Описание товара 2.3",
      },
    ],
  },
  {
    categoryName: "Keyboards",
    items: [
      {
        name: "Товар 3.1",
        price: 75,
        image: "https://example.com/image7.png",
        description: "Описание товара 3.1",
      },
      {
        name: "Товар 3.2",
        price: 175,
        image: "https://example.com/image8.png",
        description: "Описание товара 3.2",
      },
      {
        name: "Товар 3.3",
        price: 275,
        image: "https://example.com/image9.png",
        description: "Описание товара 3.3",
      },
    ],
  },
];

const categoriesLinks = document.querySelectorAll(".categories-link");
const categoriesItem = document.querySelectorAll(".categories-item");

const productsHolder = document.querySelector(".products-holder");
const productsInfo = document.querySelector(".product-info");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");
const buttonClose = document.querySelector(".modal-close");
const modalText = document.querySelector(".modal-text");

const categoriesCreate = () => {
  products.forEach((elem) => {
    const categoriesLinks = document.getElementById(elem.categoryName);
    categoriesLinks.textContent = elem.categoryName;
    categoriesLinks.addEventListener("click", () => {
      createElements(elem);
    });
  });
};
const createElements = (elem) => {
  productsHolder.innerHTML = "";
  const productsHeader = document.createElement("h2");
  productsHeader.textContent = "Products in this category";
  productsHeader.classList.add("products-header");
  const productsList = document.createElement("ul");
  productsList.classList.add("products-list");
  elem.items.forEach((item) => {
    const itemLi = document.createElement("li");
    const itemLink = document.createElement("a");
    itemLink.href = "#";
    itemLink.textContent = item.name;
    itemLi.appendChild(itemLink);

    productsList.append(itemLi);
    itemLink.addEventListener("click", () => {
      showItem(item);
    });
  });
  productsHolder.append(productsHeader, productsList);
};

const showItem = (item) => {
  productsInfo.textContent = "";
  const infoDiv = document.createElement("div");
  const itemDescription = document.createElement("p");
  const itemName = document.createElement("h2");
  const itemPrice = document.createElement("p");
  const buyBtn = document.createElement("button");
  itemPrice.textContent = `$ ${item.price}`;
  itemName.textContent = item.name;
  itemDescription.textContent = item.description;

  buyBtn.addEventListener("click", () => {
    showModal(item.name, item.price);
  });
  buyBtn.textContent = "Buy";
  infoDiv.append(itemName, itemDescription, itemPrice, buyBtn);
  productsInfo.appendChild(infoDiv);
};
const showModal = (itemName, itemPrice) => {
  modalText.textContent = "You bought";
  modalTitle.textContent = itemName;
  modalDescription.textContent = ` $${itemPrice}`;
  modal.style.display = "flex";
  buttonClose.addEventListener("click", () => {
    modal.style.display = "none";
    productsInfo.innerHTML = "";
    productsHolder.innerHTML = "";
  });

  modal.addEventListener("click", (event) => {
    if (event.target !== modal) return;
    modal.style.display = "none";
    productsInfo.innerHTML = "";
    productsHolder.innerHTML = "";
  });
};
categoriesCreate();
