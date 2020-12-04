//Get the button scrollToTop
var scrollToTopButton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button

function scrollToTopButtonDisplay() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.bottom = "10px";
  } else {
    scrollToTopButton.style.bottom = "-50px";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

var navBarPlaceHolder = document.getElementById("navBarPlaceHolder");
var sticky = navBarPlaceHolder.offsetTop;
var navBar = document.getElementById("navBar");

function stickNavbarToTop() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

window.onscroll = function () {
  scrollToTopButtonDisplay();
  stickNavbarToTop();
};
