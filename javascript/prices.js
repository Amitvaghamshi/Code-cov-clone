window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".pricemenu");

function myFunction() {
  if (window.pageYOffset >= 270) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//for faq

let faq=document.querySelectorAll(".faq")

faq.forEach(el => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  })
})
