const getElement = (elem) => {
  return document.querySelectorAll(elem);
};

const linksList = getElement(".link");

function checkLink(item) {
  item.forEach((i) => {
    if (!i.href.startsWith("https://") && !i.href.startsWith("http://")) {
      const hrefAttr = "https://" + i.getAttribute("href");
      i.setAttribute("href", hrefAttr);
    }
  });
}
checkLink(linksList);
