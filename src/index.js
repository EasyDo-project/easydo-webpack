import './scss/index.scss';
import { clientsBlockHeader, validationConf } from './utils/const';
import { footerDocuments, footerAbout } from './utils/constants.js';
import { Validation } from './components/Validation';
import { PhoneMask } from './components/PhoneMask';
import { Program } from './components/Program';
import { Scroll } from './components/Scroll';

const scroll = new Scroll('.feedbacks__scroll');

const program = new Program('#programElement', '.program__list');

const clinicHeader = document.querySelector('.assist__header');

document.querySelector('.footer__info').innerHTML = footerAbout;
document.querySelector('.footer__documents').innerHTML = footerDocuments;

clinicHeader.innerText = clientsBlockHeader;

const validation = new Validation(validationConf);
validation.enableValidation();

const masking = new PhoneMask('#personPhone');
masking.startMAsk();
scroll.enableScroll();
program.generateList();
