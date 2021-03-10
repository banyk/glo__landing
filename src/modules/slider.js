const slider = () => {
	const slider = document.querySelector('.portfolio-content'),
		sliderItems = slider.querySelectorAll('.portfolio-item'),
		dots = slider.querySelector('.portfolio-dots');


	let currentSlide = 0,
		interval;

	const prevSlide = (elem, index, strClass) => {
		elem[index].classList.remove(strClass);
	};

	const nextSlide = (elem, index, strClass) => {
		elem[index].classList.add(strClass);
	};

	const createDots = num => {
		const arr = [];
		for (let i = 0; i <= num; i++) {
			const dot = document.createElement('li');
			dot.classList.add('dot');
			dots.append(dot);
			arr.push(dot);
		}
		arr[0].classList.add('dot-active');
		return arr;
	};

	const allDots = createDots(sliderItems.length - 1);

	const autoPlaySlide = () => {
		prevSlide(sliderItems, currentSlide, 'portfolio-item-active');
		prevSlide(allDots, currentSlide, 'dot-active');
		currentSlide++;
		if (currentSlide >= sliderItems.length) {
			currentSlide = 0;
		}
		nextSlide(sliderItems, currentSlide, 'portfolio-item-active');
		nextSlide(allDots, currentSlide, 'dot-active');
	};

	const startSlider = (time = 3000) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlider = () => {
		clearInterval(interval);
	};


	slider.addEventListener('click', event => {
		event.preventDefault();

		let target = event.target;

		if (!target.matches('.portfolio-btn, .dot')) return;

		prevSlide(sliderItems, currentSlide, 'portfolio-item-active');
		prevSlide(allDots, currentSlide, 'dot-active');

		if (target.matches('#arrow-right')) {
			currentSlide++;
		} else if (target.matches('#arrow-left')) {
			currentSlide--;
		} else if (target.matches('.dot')) {
			allDots.forEach((item, index) => {
				if (item === target) {
					currentSlide = index;
				}
			});
		}

		if (currentSlide >= sliderItems.length) {
			currentSlide = 0;
		} else if (currentSlide < 0) {
			currentSlide = sliderItems.length - 1;
		}

		nextSlide(sliderItems, currentSlide, 'portfolio-item-active');
		nextSlide(allDots, currentSlide, 'dot-active');

	});

	slider.addEventListener('mouseover', event => {
		let target = event.target;
		if (target.matches('.portfolio-btn') || target.matches('.dot')) {
			stopSlider();
		}
	});

	slider.addEventListener('mouseout', event => {
		let target = event.target;
		if (target.matches('.portfolio-btn') || target.matches('.dot')) {
			startSlider();
		}
	});

	startSlider(100000);

};

export default slider;