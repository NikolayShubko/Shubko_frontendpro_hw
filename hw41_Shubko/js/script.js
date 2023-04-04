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
const categoriesList = document.querySelector(".categories-list");
const productsHolder = document.querySelector(".products-holder");
const productsInfo = document.querySelector(".product-info");
const doneBtn = document.querySelector("#done-btn");
const form = document.querySelector(".info-holder");

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
  productsHolder.textContent = "";
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
    form.style.display = "flex";
  });
  buyBtn.textContent = "Buy";
  infoDiv.append(itemName, itemDescription, itemPrice, buyBtn);
  productsInfo.appendChild(infoDiv);
};

categoriesCreate();

const getForm = (event) => {
  event.preventDefault();
  const customerName = document.querySelector("#fio").value;
  const customerCity = document.querySelector("#city").value;
  const customerSklad = document.querySelector("#sklad").value;
  const customerPayment = document.querySelector(
    "input[type=radio]:checked"
  ).value;
  const customerQuantity = document.querySelector("#amount").value;
  const customerComment = document.querySelector("#comment").value;
  if (
    !customerName ||
    !customerCity ||
    !customerSklad ||
    !customerPayment ||
    !customerQuantity
  ) {
    alert("Please fill in all the nessesary fields.");
    return;
  }
  const usersDataArray = [];
  usersDataArray.push(
    customerName,
    customerCity,
    customerSklad,
    customerPayment,
    customerQuantity,
    customerComment
  );
  createTable(usersDataArray);
};

const createTable = (array) => {
  const tableContainer = document.createElement("div");
  tableContainer.classList.toggle("table-holder");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  const fields = [
    "Name: ",
    "City: ",
    "Sklad: ",
    "Payment: ",
    "Quantity: ",
    "Comment: ",
  ];

  for (let i = 0; i < fields.length; i++) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const th = document.createElement("th");

    th.textContent = fields[i];
    td.textContent = array[i];
    tr.append(th);
    tr.append(td);
    tbody.append(tr);
  }
  table.append(tbody);
  table.setAttribute("border", "1px");
  form.innerHTML = "";
  productsHolder.innerHTML = "";
  productsInfo.innerHTML = "";
  table.classList.add("table");
  tableContainer.appendChild(table);
  tableContainer.style.display = "flex";
  tableContainer.style.alignItems = "center";
  tableContainer.style.flexDirection = "column";
  document.body.appendChild(tableContainer);
};

doneBtn.addEventListener("click", getForm);
