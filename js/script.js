$(function () {
    var header = $(".navbar");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
});
$('.carousel').carousel({
    interval: 4000
})

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

var btn = document.getElementById("button");
window.onscroll = function() {
  if (pageYOffset >= 150) {
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = "0";
  }
};


AOS.init({
    duration: 1000,
  });

(function(){

  'use strict';


  var $projects = $('.projects');

  $projects.isotope({
      itemSelector: '.item-box',
      layoutMode: 'fitRows'
  });

  $('ul.filters > li').on('click', function(e){


      var filter = $(this).attr('data-filter');

      $('ul.filters > li').removeClass('active');
      $(this).addClass('active');

      $projects.isotope({filter: filter});

  });

  $('.card').mouseenter(function(){

      $(this).find('.card-overlay').css({'top': '-100%'});

  }).mouseleave(function(){

      $(this).find('.card-overlay').css({'top': '0'});

  });

})(jQuery);


$('.open-popup-link').magnificPopup({
  type:'inline',
});



