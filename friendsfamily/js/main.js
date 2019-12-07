$(document).ready(function() {
  $.scrollify({
    section: ".js-section",
    scrollSpeed: 1500
  });
	$('.burger-wrap').on('click', function() {
		$('.burger').toggleClass('burger_active');
		$('.menu-ul').slideToggle();
	});
	$(".js-move-down").on("click", function (){
	  $.scrollify.next();
	});
	$(".js-btn-contact").on("click", function (){
	  $.scrollify.move("#contact");
	});
	$(".js-btn-contact").on("click", function (){
	  fullpage_api.moveTo('contact-page', 0);
	});
	$(".js-input__telephone").mask("+7 (nnn) nnn-nn-nn");
});