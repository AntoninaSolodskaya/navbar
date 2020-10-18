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

(function () {
  // Bind Click event to the drop down navigation button
  document.querySelector(".nav-button").addEventListener(
    "click",
    function () {
      /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
      this.parentNode.parentNode.classList.toggle("closed");
    },
    false
  );
})();

const modal = document.getElementById("modal");
const btn = document.getElementById("btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
