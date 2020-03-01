$(document).ready(function () {

  'use strict';


  //  //NAVBAR SHOW - HIDE



  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
      $("#menuList").removeClass("nav-menu-responsive");
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function (e) {
    $('.nav-menu').slideToggle();
  });

  $(window).click(function () {
    $("#menuList").removeClass("nav-menu-responsive");
  });

  $("#hamButton").click(function (e) {
    e.stopPropagation();
    let isClicked = $("#menuList").hasClass("nav-menu-responsive");

    if (isClicked)
      $("#menuList").removeClass("nav-menu-responsive");
    else
      $("#menuList").addClass("nav-menu-responsive");
  });

  $(window).resize(function () {
    let screenWidth = $(window).width();

    if (screenWidth > 600)
      $("#menuList").removeClass("nav-menu-responsive");
  });


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
