import './scss/index.scss';

import { footerDocuments, footerAbout } from './utils/constants.js';

document.querySelector('.footer__info').innerHTML = footerAbout;
document.querySelector('.footer__documents').innerHTML = footerDocuments;
