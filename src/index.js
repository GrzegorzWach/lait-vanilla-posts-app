import  './css/index.css';
import  'bulma/css/bulma.css';
import {initList} from './list';
import {initForm} from './form';

document.addEventListener('DOMContentLoaded', () => {
  initList();
  initForm();
});
