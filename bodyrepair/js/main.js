$(function(){
	$(".js-input__telephone").mask("+7 (9nn) nnn-nn-nn");
	$('.popup-link').magnificPopup({
		type: 'inline',
		midClick: true,
		mainClass: 'mfp-with-zoom',
	  zoom: {
	    enabled: true,
	    duration: 300,
	    easing: 'ease-in-out'
		}
	});
});