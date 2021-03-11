const sendForm = () => {
	const form1 = document.getElementById('form1'),
		form2 = document.getElementById('form2'),
		form3 = document.getElementById('form3');

	form1.dataset.form = 'site-form';
	form2.dataset.form = 'site-form';
	form3.dataset.form = 'site-form';


	const errorMessage = 'Что-то произошло не так',
		loadMessage = 'Идёт загрузка...',
		successMessage = 'Спасибо, мы свяжемся с вами в скором времени!';


	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 2rem; color: white;';

	const forms = document.querySelectorAll('[data-form]');

	const popup = document.querySelector('.popup');

	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});



	forms.forEach(item => {
		item.addEventListener('submit', event => {
			event.preventDefault();

			const inputs = item.querySelectorAll('input');
			let isNotValid = false;
			inputs.forEach(input => {
				if (input.classList.contains('form-name') && input.value.length < 2) {
					isNotValid = true;
					statusMessage.textContent = 'Поле "Ваше имя" должно содержать 2 или более символов';
					item.insertAdjacentElement('beforeend', statusMessage);
					setTimeout(() => {
						statusMessage.remove();
					}, 4000);
				}
				if (input.value.trim() === '') {
					isNotValid = true;
					statusMessage.textContent = 'Заполните пустое поле';
					item.insertAdjacentElement('beforeend', statusMessage);
					setTimeout(() => {
						statusMessage.remove();
					}, 4000);
				}
				if (input.classList.contains('form-phone') && input.value.length < 7) {
					isNotValid = true;
					statusMessage.textContent = 'Поле "Номер телефона" должно содержать более 7 знаков';
					item.insertAdjacentElement('beforeend', statusMessage);
					setTimeout(() => {
						statusMessage.remove();
					}, 4000);
				}
			});

			if (isNotValid) {
				return;
			} else {
				item.insertAdjacentElement('beforeend', statusMessage);
				statusMessage.textContent = loadMessage;
				const formData = new FormData(item);
				const body = {};
				formData.forEach((val, key) => {
					body[key] = val;
				});

				postData(body).then(response => {
					if (response.status === 200) {
						statusMessage.textContent = successMessage;
					} else {
						throw new Error('status network is not 200');
					}
				}).catch(error => {
					statusMessage.textContent = errorMessage;
					console.log(error);
				}).finally(() => {
					item.querySelectorAll('input').forEach(input => input.value = '');
					setTimeout(() => {
						statusMessage.remove();
						if (popup.style.display = 'block') {
							popup.style.display = 'none';
						}
					}, 4000);
				});
			}
		});
	});
};

export default sendForm;