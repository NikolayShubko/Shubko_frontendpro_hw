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
const myOrders = document.querySelector("#my-orders");

const localStorageService = {
  getOrder: () => JSON.parse(localStorage.getItem("cart")),
  setNewOrder: (order) => localStorage.setItem("cart", JSON.stringify(order)),
};

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
  itemName.id = "product-name";
  itemDescription.id = "product-description";
  itemPrice.id = "product-price";
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
  const orderProductName = document.querySelector("#product-name");
  const orderProductPrice = document.querySelector("#product-price");
  const orderProductDescription = document.querySelector(
    "#product-description"
  );
  const day = new Date().getDate() + 1;
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const dayOfOrder = day + "-" + month + "-" + year;
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
  const orderObject = {
    customerName: customerName,
    customerCity: customerCity,
    customerSklad: customerSklad,
    customerPayment: customerPayment,
    customerQuantity: customerQuantity,
    customerComment: customerComment,
    orderProductName: orderProductName.textContent,
    orderProductPrice: orderProductPrice.textContent,
    orderProductDescription: orderProductDescription.textContent,
    dayOfOrder: dayOfOrder,
  };
  saveToLocalStorage(orderObject);
};

const saveToLocalStorage = (order) => {
  const orders = localStorageService.getOrder() || [];
  orders.push(order);
  localStorageService.setNewOrder(orders);
  location.reload();
};
const getOrders = () => {
  const orders = localStorageService.getOrder();
  if (orders) {
    orders.forEach((orderData, i) => {
      const orderInfo = document.createElement("div");
      const itemDescription = document.createElement("p");
      const itemName = document.createElement("h2");
      const itemPrice = document.createElement("p");
      const customerName = document.createElement("p");
      const customerCity = document.createElement("p");
      const customerSklad = document.createElement("p");
      const customerPayment = document.createElement("p");
      const customerQuantity = document.createElement("p");
      const customerComment = document.createElement("p");
      const dayOfOrder = document.createElement("p");
      const deleteBtn = document.createElement("button");

      itemDescription.classList.add("order-info");
      customerName.classList.add("order-info");
      customerCity.classList.add("order-info");
      customerSklad.classList.add("order-info");
      customerPayment.classList.add("order-info");
      customerQuantity.classList.add("order-info");
      customerComment.classList.add("order-info");

      deleteBtn.textContent = "Delete";
      itemPrice.textContent = orderData.orderProductPrice;
      itemName.textContent = orderData.orderProductName;
      itemDescription.textContent = orderData.orderProductDescription;
      customerName.textContent = orderData.customerName;
      customerCity.textContent = orderData.customerCity;
      customerSklad.textContent = orderData.customerSklad;
      customerPayment.textContent = orderData.customerPayment;
      customerQuantity.textContent = orderData.customerQuantity;
      customerComment.textContent = orderData.customerComment;
      dayOfOrder.textContent = orderData.dayOfOrder;
      deleteBtn.textContent = "Delete";
      orderInfo.append(
        itemName,
        itemPrice,
        itemDescription,
        customerName,
        customerCity,
        customerSklad,
        customerPayment,
        customerQuantity,
        customerComment,
        dayOfOrder,
        deleteBtn
      );

      orderInfo.id = "ordersInfoHolder";
      const ordersHolder = document.querySelector(".orders");
      ordersHolder.appendChild(orderInfo);
      orderInfo.style.border = "1px solid";
      orderInfo.style.padding = "5px";
      deleteBtn.addEventListener("click", () => {
        orders.splice(i, 1);
        localStorage.setItem("orders", JSON.stringify(orders));
        orderInfo.remove();
      });
    });
    orderShowDetails();
  } else {
    alert("You Have no orders!");
  }
};

const orderShowDetails = () => {
  const ordersHolder = document.querySelectorAll("#ordersInfoHolder");
  ordersHolder.forEach((mainelem) => {
    const fullInfo = mainelem.querySelectorAll(".order-info");
    mainelem.addEventListener("click", () => {
      fullInfo.forEach((elem) => {
        elem.style.display = "block";
      });
    });
  });
};
const clearOrders = document.querySelector("#clear-orders");
clearOrders.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
doneBtn.addEventListener("click", getForm);
myOrders.addEventListener("click", getOrders);
