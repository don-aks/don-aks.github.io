$('.menu__burger-wrapper').on('click', function(){
	$('.menu__burger').toggleClass('menu__burger_active');
	$('.menu__ul').slideToggle();
})