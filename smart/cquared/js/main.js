$(function() {
	$('.slider').slick({
		dots: true,
		lazyLoad: 'ondemand'
	});

	let $elemFakePlaceholder = $(".element-with-fake-placeholder");

	// FORM ELEMENTS

	$("input[type=tel].js-mask").mask("+7 (nnn) nnn-nn-nn");

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

	// Disabled button

	$form = $('.js-form-with-btn-disabled');
	$form.children('button[type=submit]').attr('disabled', '');
	$form.on('change', 'input, textarea', function() {
		if (!$(this).valid()) {
			$form.children('button[type=submit]').attr('disabled');
		} else {
			$form.children('button[type=submit]').removeAttr('disabled');
		};
	});


	// end Disabled button

	// end FORM ELEMENTS
});