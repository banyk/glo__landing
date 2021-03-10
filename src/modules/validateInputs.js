const validateInputs = () => {
	const formMessage = document.getElementById('form2-message'),
		formNames = document.querySelectorAll('.form-name'),
		form2Name = document.getElementById('form2-name'),
		formEmails = document.querySelectorAll('.form-email'),
		formPhones = document.querySelectorAll('.form-phone');

	const hyphens = /-+/gi,
		spaces = /\s+/gi;

	document.addEventListener('input', event => {
		const target = event.target;

		if (target.matches('.calc-item') && !target.matches('.calc-type')) {
			target.value = target.value.replace(/\D/gi, '');
		} else if (target.matches('.form-name') || target.matches('#form2-name')) {
			target.value = target.value.replace(/[^А-яа-яЁё\s]/gi, '');
		} else if (target.matches('.form-email')) {
			target.value = target.value.replace(/[^A-Za-z@_.!`*'-]/gi, '');
		} else if (target.matches('.form-phone')) {
			target.value = target.value.replace(/[^+\d()-]/gi, '');
		} else if (target.matches('#form2-message')) {
			target.value = target.value.replace(/[A-Za-z]/gi, '');
		}
	});


	const changeOnBlur = event => {
		const target = event.target;

		if (target.matches('.form-name') || target.matches('#form2-name')) {
			target.value = target.value[0].toUpperCase() + target.value.substring(1).toLowerCase();
		}

		target.value = target.value.replace(hyphens, '-').trim();
		target.value = target.value.replace(spaces, ' ').trim();

	};

	formMessage.addEventListener('blur', changeOnBlur);

	form2Name.addEventListener('blur', changeOnBlur);

	formNames.forEach(item => {
		item.addEventListener('blur', changeOnBlur);
	});

	formEmails.forEach(item => {
		item.addEventListener('blur', changeOnBlur);
	});

	formPhones.forEach(item => {
		item.addEventListener('blur', changeOnBlur);
	});
};

export default validateInputs;