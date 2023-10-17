import './scss/index.scss';
import { Program } from './components/Program';

const program = new Program('#programElement', '.program__list');
program.generateList();
