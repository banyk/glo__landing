const toggleMenu = () => {
	const menuBtn = document.querySelector('.menu'),
		menu = document.querySelector('menu');

	const handlerMenu = () => {
		menu.classList.toggle('active-menu');
	};

	menuBtn.addEventListener('click', handlerMenu);

	menu.addEventListener('click', event => {
		let target = event.target;
		if (target.classList.contains('close-btn')) {
			handlerMenu();
		} else {
			target = target.closest('ul>li>a');
			if (target) handlerMenu();
		}
	});

};

export default toggleMenu;