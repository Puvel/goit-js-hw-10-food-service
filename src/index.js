import menu from './menu.json';
import listItemTemplate from './templates/listItemTemplate.hbs';
import changeThem from './changeTheme';
import './styles.css';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

function buildMarkup(menu) {
  const createMarkup = menu
    .map(menuItem => listItemTemplate(menuItem))
    .join('');
  refs.menuList.insertAdjacentHTML('beforeend', createMarkup);
}

buildMarkup(menu);

