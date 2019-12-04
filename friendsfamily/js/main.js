$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling: true,
		scrollHorizontally: true,
		sectionSelector: '.js-section',
		anchors:['info1', 'info2', 'info3', 'scheme', 'box', 'map', 'contact-page']
	});
	$('.burger-wrap').on('click', function() {
		$('.burger').toggleClass('burger_active');
		$('.menu-ul').slideToggle();
	})
	$(".js-move-down").on("click", function (){
	  fullpage_api.moveSectionDown();
	});
	$(".js-btn-contact").on("click", function (){
	  fullpage_api.moveTo('contact-page', 0);
	});
	$(".js-input__telephone").mask("+7 (nnn) nnn-nn-nn");
});