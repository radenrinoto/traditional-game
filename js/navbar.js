const mainListDiv = document.getElementById("mainListDiv");
const navMobile = document.getElementById("nav-mobile");

const onToggle = () => {
  mainListDiv.classList.toggle("show_list");
  navMobile.classList.toggle("active");
};

const mediaButton = document.getElementById("mediaButton");
mediaButton.onclick = onToggle;
