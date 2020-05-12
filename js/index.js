$(document).ready(function () {

	// Plus, minus
	$('.minus').click(function () {
		let $input = $(this).parent().find('input');
		let count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.plus').click(function () {
		let $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	// Slide header
	$('.header-banner, .company-intro-banner, .courses-banner').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: true
	});

	$('.slide-image').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: true,

		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}]
	});

	// Slide guest book
	$('.guest-book-wrap').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: true,
		dots: true
	});

	//Slide image
	$('.slider-for-image').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav-image'
	});
	$('.slider-nav-image').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-for-image',
		focusOnSelect: true,
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
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-for-video',
		focusOnSelect: true,
	});

	let optionValue = document.getElementById("form-select").value;
	let inputStudentSource = document.getElementById('student-course');

	if (optionValue === '1') {
		inputStudentSource.classList.add('disable-number');
		document.getElementById('numberStudent').value = 1;
	}

	$('#form-select').on('change', function () {
		if (this.value === 'group') {
			inputStudentSource.classList.remove("disable-number");
		} else {
			inputStudentSource.classList.add('disable-number');
			document.getElementById('numberStudent').value = 1;
		}
	})
});

let inputStudent = document.getElementById("student");

if (document.getElementById('id1').checked) {
	inputStudent.classList.add("disable-number");
	document.getElementById("numberStudent").value = 1;
}

$('input[type=radio]').change(function () {
	if (document.getElementById('id1').checked) {
		inputStudent.classList.add("disable-number");
		document.getElementById("numberStudent").value = 1;

	} else if (document.getElementById('id2').checked) {
		inputStudent.classList.remove("disable-number");
	}
})