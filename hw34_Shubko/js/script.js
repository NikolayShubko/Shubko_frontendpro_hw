const ghost = document.getElementById("ghost-div");
const text = document.getElementById("textbox");
ghost.hidden = true;
text.onfocus = function () {
  ghost.hidden = false;
};
text.onblur = function () {
  ghost.hidden = true;
};
