const changeImageByHover = event => {
	const target = event.target,
		targetDataImg = target.dataset.img,
		targetSrc = target.src;


	if (targetDataImg) {
		if (event.type === 'mouseover') {
			target.dataset.oldImage = targetSrc;
			target.src = targetDataImg;
		} else if (event.type === 'mouseout') {
			target.src = target.dataset.oldImage;

		}
	}
};

export default changeImageByHover;