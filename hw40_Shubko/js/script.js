const div = document.querySelector(".list-holder");
const arr = [1, 2, 3, [4, 5, 6]];
function createList(item) {
  const list = document.createElement("ul");
  for (let i = 0; i < item.length; i++) {
    const li = document.createElement("li");
    list.appendChild(li);
    if (Array.isArray(item[i])) {
      const subList = document.createElement("ul");
      li.append(subList);
      for (let j = 0; j < item[i].length; j++) {
        const subLi = document.createElement("li");
        subList.append(subLi);
        subLi.textContent = `${i + 1}.${item[i][j]}`;
      }
    } else {
      li.textContent = item[i];
    }
  }
  div.appendChild(list);
}

createList(arr);
