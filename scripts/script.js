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
			menuItems = menu.querySelectorAll('ul>li');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		menuBtn.addEventListener('click', handlerMenu);
		menuItems.forEach(item => item.addEventListener('click', handlerMenu));

		closeBtn.addEventListener('click', handlerMenu);

	};

	toggleMenu();

	const togglePopup = () => {
		const popup = document.querySelector('.popup'),
			popupContent = popup.querySelector('.popup-content'),
			popupBtns = document.querySelectorAll('.popup-btn'),
			popupCloseBtn = popup.querySelector('.popup-close');

		const animatePopup = () => {
			const start = Date.now();
			console.log('start: ', start);

			const draw = timePassed => {
				popupContent.style.top = timePassed / 4 + 'px';
			};

			const timer = setInterval(() => {
				const timePassed = Date.now() - start;
				console.log('timePassed: ', timePassed);

				if (timePassed >= 400) {
					clearInterval(timer);
					return;
				}

				draw(timePassed);

			}, 20);




		};

		popupBtns.forEach(item => {
			item.addEventListener('click', () => {
				popup.style.display = 'block';
				animatePopup();
			});
		});

		popupCloseBtn.addEventListener('click', () => {
			popup.style.display = 'none';
		});


	};

	togglePopup();


});