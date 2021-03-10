const togglePopup = () => {
	const popup = document.querySelector('.popup'),
		popupContent = popup.querySelector('.popup-content'),
		popupBtns = document.querySelectorAll('.popup-btn');

	let count = 0;
	const animatePopup = () => {
		const animateInterval = requestAnimationFrame(animatePopup);
		count++;

		if (count < 25) {
			popupContent.style.top = count * 5 + 'px';
		} else {
			count = 0;
			cancelAnimationFrame(animateInterval);
		}
	};

	popupBtns.forEach(item => {
		item.addEventListener('click', () => {
			popup.style.display = 'block';
			if (screen.width > 768) {
				animatePopup();
			}
		});
	});

	popup.addEventListener('click', event => {
		let target = event.target;
		if (target.classList.contains('popup-close')) {
			popup.style.display = 'none';
		} else {
			target = target.closest('.popup-content');
			if (!target) {
				popup.style.display = 'none';
			}
		}
	});


};

export default togglePopup;