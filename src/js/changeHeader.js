const header = document.querySelector("header");
const main = document.querySelector("main");
const hamburg = header.querySelector(".bar");
const modalBtn = document.querySelector(".modal>button");

const changeHeader = function () {
  let mainHeight = main.getBoundingClientRect().top;
  if (mainHeight < 0) {
    header.classList.add("change");
    hamburg.classList.add("moveUp");
    modalBtn.classList.add("moveUp");
  } else {
    header.classList.remove("change");
    hamburg.classList.remove("moveUp");
    modalBtn.classList.remove("moveUp");
  }
};

window.addEventListener("scroll", changeHeader);
