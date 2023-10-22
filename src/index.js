import './scss/index.scss';
import Header from './components/Header.js'

const header = new Header('.header', '.header__mobile-button', 
'.header__close-button', '.header__mobile-slider', '.header__logo');

const openButton = document.querySelector('.header__mobile-button');
const closeButton = document.querySelector('.header__close-button');

openButton.addEventListener('click', header.openSlideOut)
closeButton.addEventListener('click', header.closeSlideOut)
