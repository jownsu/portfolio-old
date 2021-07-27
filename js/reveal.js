// Navigation
window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 20
    ) {
      document.querySelector(".nav-h").style.cssText =
        "height:66px; transition: all .4s ease; ";
      document.querySelector("header").style.cssText =
        "box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);";
    } else {
      document.querySelector(".nav-h").style.cssText = "height: 108px";
      document.querySelector("header").style.cssText = "box-shadow: unset;";
    }
  }

  window.addEventListener("scroll", reveal);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;

      if (revealtop - 300 < windowheight - revealtop) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  // LOADER