const toggleMenu = () => {
	const menuBtn = document.querySelector('.menu'),
		menu = document.querySelector('menu'),
		scrollBtn = document.querySelector('a[href="#service-block"]');
	const handlerMenu = () => {
		menu.classList.toggle('active-menu');
	};

	const smoothScroll = target => {
		const href = target.getAttribute('href');
		const element = document.querySelector(href);
		window.scrollTo({
			left: 0,
			top: element.offsetTop,
			behavior: 'smooth'
		});
	};

	menuBtn.addEventListener('click', handlerMenu);

	menu.addEventListener('click', event => {
		event.preventDefault();
		let target = event.target;
		if (target.classList.contains('close-btn')) {
			handlerMenu();
		} else {
			target = target.closest('ul>li>a');
			if (target) {
				handlerMenu();
				smoothScroll(target);
			}
		}
	});

	scrollBtn.addEventListener('click', event => {
		event.preventDefault();
		smoothScroll(scrollBtn);
	});

	// document.addEventListener('click', event => {
	// 	event.preventDefault();
	// 	let target = event.target;

	// 	const menuBtn = target.closest('.menu'),
	// 		menu = target.closest('menu'),
	// 		closeBtn = target.closest('.close-btn'),
	// 		menuLink = target.closest('ul>li>a');
	// 	if (menuBtn) {
	// 		handlerMenu();
	// 		console.log('target: ', menuBtn);
	// 	} else if (menuLink) {
	// 		handlerMenu();
	// 		smoothScroll(menuLink);
	// 		console.log('menuLink: ', menuLink);
	// 	} else if (closeBtn) {
	// 		handlerMenu();
	// 	} else if (menu) {
	// 		console.log(menu);
	// 		console.log('menu: ', menu.classList.contains('active-menu'));
	// 	}
	// });
};

export default toggleMenu;