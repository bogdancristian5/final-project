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


//Get the button
var mybutton = document.getElementById("myCVBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}