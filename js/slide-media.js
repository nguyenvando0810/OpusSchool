$(document).ready(function () {
  $('.images-slide').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    arrows: true,
    swipe: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    }]
  });

  $('.slider-for1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,

    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.slider-nav1'
  });
  $('.slider-nav1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for1',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    }]
  });

  $('.slider-for2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.slider-nav2'
  });
  $('.slider-nav2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for2',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    }]
  });
})