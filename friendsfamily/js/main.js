$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling: true,
		scrollHorizontally: true,
		sectionSelector: '.js-section'
	});
	$(document).on('click', '.js-move-down', function(){
	  fullpage_api.moveSectionDown();
	});
});