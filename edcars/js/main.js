$(function() {
	$(".js-mask-phone").mask("+7 (nnn) nnn-nn-nn");
	$(".js-question").on('click', function(event) {
		var ans = $(this).siblings('.js-answer');
		ans.show(300);
		/*
			При фокусе должен появлятся элемент в DOM'е, js-answer__close-btn, с аттрибутами aria-label="Закрыть" title="Закрыть"
			При клике на этот элемент должно закрываться всплывающее окошко.
			2 способа:
				1. Сделать функцию.
				2. Сделать элемент unfocused.
			Второй предпочтительнее для такого рода проекта, но нужно знать как сделать и первым способом.
			Пока что я js особо не понимаю, поэтому отложу сложные штуки на более подходящее время :).

			Также нужно сделать эффект при появлении. Подойдет animate.css или CSS код из magnific popup.
		*/
	});
	/*$(".js-question").focusout(function(event) {
		var ans = $(this).siblings('.js-answer');
		ans.hide(300);
	});*/
})