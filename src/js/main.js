var vins = document.querySelector(".vins");
var window = document.querySelector(".window");
var toggleMenu = function toggleMenu() {
  window.classList.toggle("is-active");
};
vins.addEventListener("click", toggleMenu);
