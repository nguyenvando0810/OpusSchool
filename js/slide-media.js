$(document).ready(function () {
  $('.images-slide, .video-slide').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    swipe: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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

  $('.slider-for3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.slider-nav3'
  });
  $('.slider-nav3').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for3',
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

  $('.slider-for4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.slider-nav4'
  });
  $('.slider-nav4').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for4',
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

  $('.slider-for5').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.slider-nav5'
  });
  $('.slider-nav5').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for5',
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

  $('.slider-for6').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.slider-nav6'
  });
  $('.slider-nav6').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for6',
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

  $('.slider-for7').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.slider-nav7'
  });
  $('.slider-nav7').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for7',
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