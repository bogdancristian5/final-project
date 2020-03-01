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
  
    // ========================================================================= //
    //  Typed Js
    // ========================================================================= //
  
    var typed = $(".typed");
  
    $(function() {
      typed.typed({
        strings: ["Photo Gallery."],
        typeSpeed: 500,
        loop: true,
      });
    });

  
  });
  