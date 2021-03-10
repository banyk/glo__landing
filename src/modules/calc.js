const calc = (price = 100) => {
	const calcBlock = document.querySelector('.calc-block'),
		calcType = calcBlock.querySelector('.calc-type'),
		calcSquare = calcBlock.querySelector('.calc-square'),
		calcDay = calcBlock.querySelector('.calc-day'),
		calcCount = calcBlock.querySelector('.calc-count'),
		totalValue = document.getElementById('total');

	const countSum = () => {
		let total = 0,
			countValue = 1,
			dayValue = 1;

		const typeValue = (calcType.options[calcType.selectedIndex].value),
			squareValue = +calcSquare.value;


		if (calcCount.value > 1) {
			countValue += (calcCount.value - 1) / 10;
		}

		if (calcDay.value < 5) {
			dayValue *= 2;
		} else if (calcDay.value < 10) {
			dayValue *= 1.5;
		}

		if (typeValue && squareValue) {
			total = price * typeValue * squareValue * countValue * dayValue;
		}


		totalValue.textContent = total;
	};

	calcBlock.addEventListener('input', event => {
		const target = event.target;

		if (target.matches('input') || target.matches('select')) {
			countSum();
		}

	});
};

export default calc;