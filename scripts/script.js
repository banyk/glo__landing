/* eslint-disable strict */
window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// таймер
	const countTimer = deadline => {
		const timerHours = document.getElementById('timer-hours'),
			timerMinutes = document.getElementById('timer-minutes'),
			timerSeconds = document.getElementById('timer-seconds');

		const getTimeRemaining = () => {
			const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 3600);

			return {
				seconds,
				minutes,
				hours,
				timeRemaining
			};
		};

		const updateClock = () => {
			const timer = getTimeRemaining();

			if (timer.timeRemaining <= 0) {
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
				return false;
			} else if (timer.timeRemaining > 0) {
				for (const key in timer) {
					if (timer[key] < 10) {
						timer[key] = '0' + timer[key];
					}
				}
				timerHours.textContent = timer.hours;
				timerMinutes.textContent = timer.minutes;
				timerSeconds.textContent = timer.seconds;
			}

		};
		let idInterval;
		updateClock() !== false ? idInterval = setInterval(updateClock, 1000) : clearInterval(idInterval);

	};

	countTimer('25 feb 2021');

	// меню
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

	toggleMenu();

	// попап
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

	togglePopup();

	// табы
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

	tabs();

	// слайдер
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

	slider();


});