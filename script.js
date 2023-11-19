const menu = document.querySelector(".nav-link");
document.querySelector("#menu").onclick = () => {
  menu.classList.toggle("active");
};
document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }
});
