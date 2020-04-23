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
	$('.header-banner, .company-intro-banner').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: true
	});

	// Slide guest book
	$('.guest-book-wrap').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: true,
		dots: true
	});
});

// Gallery
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("img-detail");
	let dots = document.getElementsByClassName("thumnail-item");
	let captionText = document.getElementById("caption-img");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	captionText.innerHTML = dots[slideIndex - 1].alt;
}

//Slide Video
let slideIndexVideo = 1;
showSlidesVideo(slideIndexVideo);

function plusSlidesVideo(n) {
	showSlidesVideo(slideIndexVideo += n);
}

function currentSlideVideo(n) {
	showSlidesVideo(slideIndexVideo = n);
}

function showSlidesVideo(n) {
	let i;
	let slides = document.getElementsByClassName("video-detail");
	let dots = document.getElementsByClassName("thumnail-item-video");
	// let captionText = document.getElementById("caption-img");
	if (n > slides.length) {
		slideIndexVideo = 1
	}
	if (n < 1) {
		slideIndexVideo = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndexVideo - 1].style.display = "block";
	dots[slideIndexVideo - 1].className += " active";
	// captionText.innerHTML = dots[slideIndexVideo - 1].alt;
}
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