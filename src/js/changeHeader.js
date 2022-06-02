const header = document.querySelector("header");
const main = document.querySelector("main");
const hamburg = header.querySelector(".bar");

const changeHeader = function () {
  let mainHeight = main.getBoundingClientRect().top;
  if (mainHeight < 0) {
    header.classList.add("change");
    hamburg.classList.add("moveUp");
  } else {
    header.classList.remove("change");
    hamburg.classList.remove("moveUp");
  }
};

window.addEventListener("scroll", changeHeader);
