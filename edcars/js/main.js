$(function() {
	$(".js-mask-phone").mask("+7 (nnn) nnn-nn-nn");

	// start QnA

	function show_tooltip(elem) {
		$(elem).toggleClass('questions__question_active');
		$js_answer = $(elem).parent().siblings('.js-answer');
		$js_answer.toggleClass('questions__answer_show');
		$js_answer.prepend('<button class="js-answer__close-btn questions__answer-close-btn" aria-label="Закрыть" title="Закрыть"></button>');
	};

	function close_tooltip() {
		$(".questions__question_active").removeClass('questions__question_active');
		$(".questions__answer_show").removeClass('questions__answer_show');
		close_btn = $(".js-answer__close-btn");
		window.setTimeout(function() {
			$(close_btn).remove()
		}, 300);
	};

	$(".js-question").on('click', function() {
		if ($(this).hasClass("questions__question_active")) {
			close_tooltip();
		}
		else if ($('*').is(".questions__question_active")) {
			close_tooltip();
			show_tooltip($(this));
		}
		else{
			show_tooltip($(this));
		};
	});

	$(".js-answer").on("click", ".js-answer__close-btn", close_tooltip);

	$(document).click(function(event) {
		$question_active = $(".questions__question_active");
		if ($('*').is($question_active)) {
			$target = $(event.target);
			$answer_active = $(".questions__answer_show");

			if(!$target.closest($question_active).length && 
			!$target.closest($answer_active).length) {
				close_tooltip();
			};
		};
	});

	// end QnA

	$(".questions__btn").on('click', function() {
		$(".questions__list_hidden").slideToggle();
		$(this).toggleClass("questions__btn_slide");
		html = $(this).html();
		if (html == "Скрыть вопросы") {
			$(this).html("Еще вопросы");
		}
		else {
			$(this).html("Скрыть вопросы");
		}
	});

	$('.warehouse-slider').slick({
		slidesToShow: 3,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 5000,
  	responsive: [
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 2
      }
    },
    {
    	breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "25px"
      }
    }
  ]
	});
});