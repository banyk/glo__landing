'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImageByHover from './modules/changeImageByHover';
import validateInputs from './modules/validateInputs';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
// таймер
countTimer('25 march 2021');

// меню
toggleMenu();

// попап
togglePopup();

// табы
tabs();

// слайдер
slider();

// смена изображения по наведению
document.addEventListener('mouseover', changeImageByHover);
document.addEventListener('mouseout', changeImageByHover);

// валидация форм
validateInputs();

// калькулятор
calc(100);

// send-ajax-form
sendForm();