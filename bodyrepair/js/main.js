$(function(){
	$(".js-input__telephone").mask("+7 (9nn) nnn-nn-nn");
	$('.popup-link').magnificPopup({
		type: 'inline',
		removalDelay: 500,
		mainClass: 'mfp-zoom-in'
	});
	$(".js-button-scroll").on("click", function (event) {
		var id  = $(this).attr('data-anchor'),
		    anchor = $(id).offset().top;
		$('body,html').animate({scrollTop: anchor}, 1000);
	});
});