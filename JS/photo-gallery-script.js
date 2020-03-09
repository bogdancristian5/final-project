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
  