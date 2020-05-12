	//Slide image
	$('.slider-for-image').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav-image'
	});
	$('.slider-nav-image').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-for-image',
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,

		responsive: [{
			breakpoint: 768,
			settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 5,
			}
		}]
	});

	//Slide video
	$('.slider-for-video').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav-video'
	});
	$('.slider-nav-video').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-for-video',
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,

		responsive: [{
			breakpoint: 768,
			settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 5,
			}
		}]
	});