//Carousel
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


// Action btn events
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

let btn = document.querySelector('#myBtn')
btn.addEventListener("click", () =>{
topFunction()
})
window.onscroll = function () {
  scrollFunction();
};
