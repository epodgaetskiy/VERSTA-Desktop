$(function() {

	$('.slider-wrapper').slick({
		speed: 500,
		dots: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000
	});

	$('.slider-about').slick({
		speed: 500,
		dots: true,
		arrows: false,	
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000
	});

});