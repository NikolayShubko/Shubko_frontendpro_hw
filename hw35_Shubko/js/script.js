const div = document.getElementById("table");
const table = document.createElement("table");
const tableBody = document.createElement("tbody");
document.body.style.backgroundColor = "#FDD8D6";
for (let i = 0; i < 10; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("td");
    const randNumber = document.createTextNode(Math.floor(Math.random() * 101));
    cell.style.minWidth = "30px";
    cell.style.textAlign = "center";
    cell.appendChild(randNumber);
    row.appendChild(cell);
  }

  tableBody.appendChild(row);
}

table.appendChild(tableBody);
div.appendChild(table);
table.setAttribute("border", "1");

table.style.borderCollapse = "collapse";
table.style.margin = "0 auto";
table.style.backgroundColor = "lightgreen";
