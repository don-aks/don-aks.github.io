$(function() {
	$('.slider').slick({
		dots: true,
		lazyLoad: 'ondemand'
	});

	let $inputFakePlaceholder = $(".input-with-fake-placeholder"),	wrapperAsterisk = '<span class="mark"></span>',
			wrapperFakePlaceholder = '<span class="fake-placeholder"></span>';

	$.each($inputFakePlaceholder, function (_, $input) {
		$input = $($input);
		let placeholder = $input.attr('placeholder');
		$input.parent().prepend(wrapperFakePlaceholder);
		// $input.parent().prepend(placeholder).wrap(wrapper);
		$input.attr('placeholder', '');
	})
});