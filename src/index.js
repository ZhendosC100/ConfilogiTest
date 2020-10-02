import contact from './modules/contact';
import popup from './modules/popup';
import tabs from './modules/tabs';
import textChange from './modules/textChange';

document.addEventListener('DOMContentLoaded', () => {
  contact();
  popup();
  tabs();
  textChange();
});