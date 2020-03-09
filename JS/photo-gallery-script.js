/*global $, jQuery, alert*/
$(document).ready(function() {

    'use strict';
  
  

    // TYPED JS 
  
    var typed = $(".typed");
  
    $(function() {
      typed.typed({
        strings: ["Photo Gallery."],
        typeSpeed: 500,
        loop: true,
      });
    });

    // RESPONSIVE NAV

    function myFunction2() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

  // STICKY MENU !!!

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
  
  });
  