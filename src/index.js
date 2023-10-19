import './scss/index.scss';
import { clientsBlockHeader } from './utils/const';
import { footerDocuments, footerAbout } from './utils/constants.js';

const clinicHeader = document.querySelector('.assist__header');

document.querySelector('.footer__info').innerHTML = footerAbout;
document.querySelector('.footer__documents').innerHTML = footerDocuments;

clinicHeader.innerText = clientsBlockHeader;
