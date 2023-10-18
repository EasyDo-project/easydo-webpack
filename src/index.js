import './scss/index.scss';
import { Program } from './components/Program';
import { footerDocuments, footerAbout } from './utils/constants.js';
import { clientsBlockHeader } from './utils/const';

const program = new Program('#programElement', '.program__list');

const clinicHeader = document.querySelector('.assist__header');

document.querySelector('.footer__info').innerHTML = footerAbout;
document.querySelector('.footer__documents').innerHTML = footerDocuments;

clinicHeader.innerText = clientsBlockHeader;

program.generateList();
