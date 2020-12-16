document.addEventListener("DOMContentLoaded", function () {
  let elems = document.querySelectorAll(".carousel");
  let instance = M.Carousel.init(elems, {
    fullWidth: false,
    indicators: true,
    duration: 100,
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let elemes = document.querySelectorAll(".dropdown-trigger");
  let instances = M.Dropdown.init(elemes, {
    coverTrigger: false,
    hover: true,
  });
});
let mybutton = document.getElementsByClassName("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
