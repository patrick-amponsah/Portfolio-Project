// navigation section
function openNav() {
  document.getElementById("overlay").style.width = "100%";
}

function closeNav() {
  document.getElementById("overlay").style.width = "0%";
}

const overlayContainer = document.getElementById("overlay");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementsByClassName("mobile-menu");
const mobNavClosebtn = document.getElementsByClassName("mob-closebtn");

overlayContainer.addEventListener("click", (event) => {
  closeNav();
});

menuIcon.addEventListener("click", (event) => {
  openNav();
});

mobNavClosebtn.addEventListener("click", (event) => {
  closeNav();
});
