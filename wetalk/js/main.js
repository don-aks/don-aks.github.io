// Плавная прокрутка до якоря
const anchors = document.querySelectorAll('.js-scroll');

for (let anchor of anchors) {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		
		let anchorActive = document.querySelector('.js-scroll.active');
		removeClass(anchorActive, 'active');
		
		anchor.className += " " + "active";

		const blockID = anchor.getAttribute('href').substr(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

/*// Обновление активных классов при прокрутке до блока
const sections = document.querySelectorAll('body > section[id]');

window.addEventListener('scroll', function() {
	for (let section of sections) {
		if ( isVisible(section) ) {
			let link = document.querySelector('.menu__lnk[href="#'+section.id+'"]'),
					linkActive = document.querySelector('.menu__lnk.active');
			removeClass(linkActive, 'active');
			
			link.className += " " + "active";
			break;
		}
	}
});*/

// autosize plugin
autosize(document.querySelectorAll('.textarea-autosize'));

function removeClass(element, className) {
	try {
		element.className = element.className.replace(className, "");
	}
	catch(e) {}
}

function isVisible(element) {
	let elementBoundary = element.getBoundingClientRect(),
			header = document.querySelector('header.header'),
			headerHeight = header.getBoundingClientRect().height;
 
  let top = elementBoundary.top,
  		bottom = elementBoundary.bottom,
  		height = elementBoundary.height;
 
  return (top + height >= 0) && (height + (window.innerHeight - headerHeight)  >= top);
}