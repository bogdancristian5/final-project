$(document).ready(function () {

  'use strict';


  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Bogdan Cristian."],
      typeSpeed: 500,
      loop: true,
    });
  });
});



window.onscroll = function () { myStickyFunction() };

    var navbar = document.getElementById("myTopnav");
    var sticky = navbar.offsetTop;

    function myStickyFunction() {
      if (window.pageYOffset >= sticky) {
        myTopnav.classList.add("sticky")
      } else {
        myTopnav.classList.remove("sticky");
      }
    }

function myFunction2() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

