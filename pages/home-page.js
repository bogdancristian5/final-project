



let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".about-section > h1");
  }
});



let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';


  //  //NAVBAR SHOW - HIDE
 


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });


});



// Responsive NavBar

// function myFunction() {
//   var x = document.getElementById("main-nav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }