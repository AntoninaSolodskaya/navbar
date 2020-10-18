function openNav() {
  document.getElementById("mySidenav").style.width = "80%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function myFunction(e) {
  let elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("active");
  });
  e.target.classList.add("active");
}

const open = document.getElementById("burger");
const close = document.getElementById("close-btn");
const list = document.getElementById("mySidenav");

open.addEventListener("click", () => openNav());
close.addEventListener("click", () => closeNav());
list.addEventListener("click", (e) => myFunction(e));
