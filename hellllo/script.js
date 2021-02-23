'use strict';

const showToday = () => {

	const getTimeRemaining = () => {
		const today = new Date(),
			newYear = new Date('01 jan 2022'),
			hours = today.getHours(),
			day = today.getDay(),
			weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
			daysToNewYear = Math.ceil(((newYear.getTime() - today.getTime()) / 1000) / 3600 / 24),
			time = today.toLocaleTimeString('en');

		return {
			today,
			hours,
			day,
			weekDays,
			daysToNewYear,
			time
		};
	};

	const allTime = getTimeRemaining();
	console.log(allTime);

	const showHello = () => {
		let hoursMessage;
		if (allTime.hours >= 0 && allTime.hours < 6) {
			hoursMessage = 'Доброй ночи';
			return hoursMessage;
		} else if (allTime.hours >= 6 && allTime.hours < 12) {
			hoursMessage = 'Доброе утро';
			return hoursMessage;
		} else if (allTime.hours >= 12 && allTime.hours < 18) {
			hoursMessage = 'Добрый день';
			return hoursMessage;
		} else if (allTime.hours >= 18 && allTime.hours < 24) {
			hoursMessage = 'Добрый вечер';
			return hoursMessage;
		}
	};

	const showDay = () => {
		let dayOfWeek;
		allTime.weekDays.forEach((item, i, arr) => {
			if (i + 1 === allTime.day) {
				dayOfWeek = item;
			} else if (allTime.day === 0) {
				dayOfWeek = arr[6];
			}
		});
		return dayOfWeek;
	};


	const div = document.createElement('div');

	document.body.append(div);
	div.innerHTML = `${showHello()} <br>
	Сегодня: ${showDay()} <br>
	Текущее время: ${allTime.time} <br>
	До нового года осталось ${allTime.daysToNewYear} дней`;


	const showTimeToPage = () => {
		const allTime = getTimeRemaining();
		div.innerHTML = `${showHello()} <br>
		Сегодня: ${showDay()} <br>
		Текущее время: ${allTime.time} <br>
		До нового года осталось ${allTime.daysToNewYear} дней`;
	};

	setInterval(showTimeToPage, 1000);


};

showToday();