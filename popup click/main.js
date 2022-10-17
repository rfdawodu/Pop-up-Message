const popUp = document.getElementById("white-bg");
const openPopup = document.querySelector(".buton");
const closePopup = document.querySelector(".btn");

const open = function () {
  popUp.classList.add("hidden");
};
const close = function () {
  popUp.classList.remove("hidden");
};

openPopup.addEventListener("click", open);

closePopup.addEventListener("click", close);

// function openPopup() {
//   popUp.classList.add("hidden");
// }

// function closePopup() {
//   popUp.classList.remove("hidden");
// }
