const hamburgButton = document.querySelector(".bar");
const icon = hamburgButton.querySelector("i");

const changeIcon = function () {
  let name = icon.classList;
  if (name.contains("fa-bars")) {
    icon.className = `fa-solid fa-x`;
  } else {
    icon.className = `fa-solid fa-bars`;
  }
};

hamburgButton.addEventListener("click", changeIcon);
