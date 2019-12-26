$(document).ready(function() {
  $.scrollify({
    section: ".js-section",
    scrollSpeed: 1300
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
	$(".js-input__telephone").mask("+7 (nnn) nnn-nn-nn");
});