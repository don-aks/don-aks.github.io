$(function() {

	const numberWithAnim = $(".number-with-anim"),
				section = $('section.progress'),
				sectionPosition = section.offset().top;

	$(window).bind('scroll', function() {
		if ( $(this).scrollTop() + 300 > sectionPosition ) {
			numberWithAnim.spincrement({
				duration: 5000
			});

			$(window).unbind('scroll');
		}
	});

	

	$('.slider').slick({
		dots: true,
		lazyLoad: 'ondemand',
		autoplay: true,
		autoplaySpeed: 4000
	});

	// FORM ELEMENTS

	$("input[type=tel].js-mask").mask("+7 (nnn) nnn-nn-nn");

	let $elemFakePlaceholder = $(".element-with-fake-placeholder");

	// Fake placeholder

	$.each($elemFakePlaceholder, function (_, $input) {
		$input = $($input);
		let $parent = $input.parent(),
				placeholder = $input.attr('placeholder');

		$parent.prepend('<span class="fake-placeholder"></span>');

		if (placeholder.indexOf('*') + 1) {
			placeholder = placeholder.replace(/\*/g, '<span class="mark">*</span>');
		}

		$parent.find('.fake-placeholder').html(placeholder);
		$input.attr('placeholder', '');
	});

	$elemFakePlaceholder.on('change keyup input', function() {
		let $fakePlaceholder = $(this).parent().find('.fake-placeholder');
		if ($(this).val() == '') {
			$fakePlaceholder.show();
			return;
		}
		$fakePlaceholder.hide();
	});

	$('.fake-placeholder').on('mousedown selectstart', function() {
		$(this).parent().find('input textarea').focus();
	});

	// end Fake placeholder

	/*! form valid */

	$form = $('.js-form-with-btn-disabled');
	$form.children('button[type=submit]').attr('disabled', '');

	$form.on('change', 'input, textarea', function() {
		if ( !$(this).isValid() ) {
			$form.children('button[type=submit]').attr('disabled', '');
		} else {
			$form.children('button[type=submit]').removeAttr('disabled');
		};
	});


	// end Disabled button

	// end FORM ELEMENTS

	$('.js-scroll').on('click', function() {
		event.preventDefault();
		console.log('click');

		let idBlock = $(this).attr('href'),
				blockPosition = $(idBlock).offset().top;

		$('body,html').animate(
			{scrollTop: blockPosition}, 1000
		);
	});
});