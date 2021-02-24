/* eslint-disable strict */
window.addEventListener('DOMContentLoaded', () => {
	'use strict';

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
				for (let key in timer) {
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


	const toggleMenu = () => {
		const menuBtn = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeBtn = menu.querySelector('.close-btn'),
			menuList = menu.querySelector('ul');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		menuBtn.addEventListener('click', handlerMenu);

		menuList.addEventListener('click', event => {
			if (event.target.tagName === 'A') handlerMenu();
		});

		closeBtn.addEventListener('click', handlerMenu);

	};

	toggleMenu();

	const togglePopup = () => {
		const popup = document.querySelector('.popup'),
			popupContent = popup.querySelector('.popup-content'),
			popupBtns = document.querySelectorAll('.popup-btn'),
			popupCloseBtn = popup.querySelector('.popup-close');

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

		/* 		const animatePopup = () => {
					const start = Date.now();

					const draw = timePassed => {
						popupContent.style.top = timePassed / 4 + 'px';
					};

					const timer = setInterval(() => {
						const timePassed = Date.now() - start;

						if (timePassed >= 400) {
							clearInterval(timer);
							return;
						}

						draw(timePassed);

					}, 20);
					эту фунцкию по идее скопировал с learnJS, как работает функия вроде понял
		}; */


		popupBtns.forEach(item => {
			item.addEventListener('click', () => {
				popup.style.display = 'block';
				if (screen.width > 768) {
					animatePopup();
				}
			});
		});

		popupCloseBtn.addEventListener('click', () => {
			popup.style.display = 'none';
		});


	};

	togglePopup();


});