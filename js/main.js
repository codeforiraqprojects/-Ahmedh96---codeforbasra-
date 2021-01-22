$(function () {
  'use strict';

  var winH    = $(window).height(),
      upperH  = $('.upper-bar').innerHeight(),
      navH    = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH - (upperH + navH));
  $(window).resize(function(){
    $('.slider, .carousel-item').height(winH - (upperH + navH));
  });

  $('.featured-work ul li').on('click' , function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).data('class') === 'all')
    {
        $('.shffle-images .col-md').css('opacity' , 1);
    }
    else
    {
        $('.shffle-images .col-md').css('opacity' , '.07');
        $($(this).data('class')).parent().css('opacity' , 1);
    }

  });

  $('.testimonials .carousel-control-prev span').on('click' , function(){
      $(this).addClass('fixed');
      $('.testimonials .carousel-control-next span').removeClass('fixed');
  });
  $('.testimonials .carousel-control-next span').on('click' , function(){
      $(this).addClass('fixed');
      $('.testimonials .carousel-control-prev span').removeClass('fixed');
  });











  //scrolling smoth in links

  $('.scrolling a').click(function(e){
      e.preventDefault();
      $('html , body').animate({
          scrollTop: $('#' + $(this).data('scroll')).offset().top,
      },1000);
  });









  $('.surgeries').countTo();
  $('.outpatient').countTo();
  $('.lab').countTo();
  $('.employees').countTo();
});
