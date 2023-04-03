const submit = document.getElementById("submit");
const getinfo = (event) => {
  event.preventDefault();
  const name = document.getElementById("name");
  const surname = document.getElementById("surname");
  const city = document.getElementById("city");
  const address = document.getElementById("address");
  const languages = document.querySelectorAll('input[name="Language"]:checked');
  createTable([name, surname, city, address, languages]);
  hideForm();
};

const hideForm = () => {
  const formHolder = document.querySelector(".form-holder");
  formHolder.style.display = "none";
};
const createTable = (array) => {
  const tableContainer = document.createElement("div");
  tableContainer.classList.toggle("table-holder");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  for (let i = 0; i < array.length; i++) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");
    if (array[i] instanceof NodeList) {
      const arrayNode = [];
      array[i].forEach((elem) => {
        arrayNode.push(elem.value);
      });
      td.textContent = arrayNode;
      th.textContent = "language";
    } else {
      td.textContent = array[i].value;
      th.textContent = array[i].name;
    }
    tr.style.textTransform = "capitalize";
    td.style.padding = "5px";
    th.style.padding = "5px";
    tr.appendChild(th);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  table.setAttribute("border", "1");
  table.style.textAlign = "center";
  table.style.borderCollapse = "collapse";
  tableContainer.appendChild(table);
  tableContainer.style.display = "flex";
  tableContainer.style.alignItems = "center";
  tableContainer.style.flexDirection = "column";
  document.body.appendChild(tableContainer);
};
submit.addEventListener("click", getinfo);
