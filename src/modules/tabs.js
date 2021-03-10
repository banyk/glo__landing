const tabs = () => {
	const tabsHeader = document.querySelector('.service-header'),
		tabs = tabsHeader.querySelectorAll('.service-header-tab'),
		tabsContent = document.querySelectorAll('.service-tab');

	const toggleTabs = index => {
		for (let i = 0; i < tabs.length; i++) {
			if (index === i) {
				tabsContent[i].classList.remove('d-none');
				tabs[i].classList.add('active');
			} else {
				tabsContent[i].classList.add('d-none');
				tabs[i].classList.remove('active');
			}
		}
	};

	tabsHeader.addEventListener('click', event => {
		let target = event.target;
		target = target.closest('.service-header-tab');

		if (target) {
			tabs.forEach((item, i) => {
				if (item === target) {
					toggleTabs(i);
				}
			});
		}
	});

};

export default tabs;