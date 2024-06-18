import Inputmask from 'inputmask';
import refs from './refs';

const phoneInput = new Inputmask('+380 99 999 9999');
phoneInput.mask(refs.phoneInput);
