// burger
let burger = document.getElementById('burger-menu'),
		menu = document.getElementById('menu');

burger.addEventListener('click', function() {
	slideToggle(menu);
})

// Плавная прокрутка до якоря
const anchors = document.querySelectorAll('.js-scroll');

for (let anchor of anchors) {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		
		let anchorActive = document.querySelector('.js-scroll.active');
		try {anchorActive.className = anchorActive.className.replace(/\bactive\b/g, "")}
		catch (e) {};
		
		anchor.className += " " + "active";

		const blockID = anchor.getAttribute('href').substr(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

// Обновление активных классов при прокрутке до блока
// сделано криво, поэтому закоментировано.

/*const sections = document.querySelectorAll('body > section[id]');

window.addEventListener('scroll', function() {
	for (let section of sections) {
		if (isVisible(section)) {
			let link = document.querySelector('.menu__lnk[href="#'+section.id+'"]'),
					linkActive = document.querySelector('.menu__lnk.active');

			try {linkActive.className = linkActive.className.replace(/\bactive\b/g, "")}
			catch (e) {};
			
			link.className += " " + "active";
			break;
		}
	}
});

function isVisible(element) {
	let elementRect = element.getBoundingClientRect(),
			scrollTop = document.getElementsByTagName("body")[0].scrollTop;

	return elementRect.top + elementRect.height > scrollTop;
}*/

// autosize plugin
autosize(document.querySelectorAll('.textarea-autosize'));


// jquery slideToggle
function slideUp(element, duration = 500) {

	return new Promise(function (resolve, reject) {

			element.style.height = element.offsetHeight + 'px';
			element.style.transitionProperty = `height, margin, padding`;
			element.style.transitionDuration = duration + 'ms';
			element.offsetHeight;
			element.style.overflow = 'hidden';
			element.style.height = 0;
			element.style.paddingTop = 0;
			element.style.paddingBottom = 0;
			element.style.marginTop = 0;
			element.style.marginBottom = 0;
			window.setTimeout(function () {
					element.style.display = 'none';
					element.style.removeProperty('height');
					element.style.removeProperty('padding-top');
					element.style.removeProperty('padding-bottom');
					element.style.removeProperty('margin-top');
					element.style.removeProperty('margin-bottom');
					element.style.removeProperty('overflow');
					element.style.removeProperty('transition-duration');
					element.style.removeProperty('transition-property');
					resolve(false);
			}, duration)
	})
}
function slideDown(element, duration = 500) {

	return new Promise(function (resolve, reject) {

			element.style.removeProperty('display');
			let display = window.getComputedStyle(element).display;

			if (display === 'none') 
					display = 'block';

			element.style.display = display;
			let height = element.offsetHeight;
			element.style.overflow = 'hidden';
			element.style.height = 0;
			element.style.paddingTop = 0;
			element.style.paddingBottom = 0;
			element.style.marginTop = 0;
			element.style.marginBottom = 0;
			element.offsetHeight;
			element.style.transitionProperty = `height, margin, padding`;
			element.style.transitionDuration = duration + 'ms';
			element.style.height = height + 'px';
			element.style.removeProperty('padding-top');
			element.style.removeProperty('padding-bottom');
			element.style.removeProperty('margin-top');
			element.style.removeProperty('margin-bottom');
			window.setTimeout(function () {
					element.style.removeProperty('height');
					element.style.removeProperty('overflow');
					element.style.removeProperty('transition-duration');
					element.style.removeProperty('transition-property');
			}, duration)
	})
}

function slideToggle(element, duration = 500) {
	if (window.getComputedStyle(element).display === 'none') {

			return this.slideDown(element, duration);

	} else {

			return this.slideUp(element, duration);
	}
}