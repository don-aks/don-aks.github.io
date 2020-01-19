$(function() {
	$('.slider').slick({
		dots: true,
		lazyLoad: 'ondemand'
	});

	let $elemFakePlaceholder = $(".element-with-fake-placeholder");

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
});