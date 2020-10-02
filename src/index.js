import contact from './modules/contact';
import mainModal from './modules/mainModal';
import popup from './modules/popup';
import questionTabs from './modules/questionTabs';
import tabs from './modules/tabs';
import textChange from './modules/textChange';

document.addEventListener('DOMContentLoaded', () => {
  contact();
  popup();
  tabs();
  questionTabs();
  textChange();
  mainModal();
});