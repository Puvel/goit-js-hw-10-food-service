import { loadStorage, saveStorage } from './storage';
const refs = {
  themeCheckbox: document.querySelector('.js-switch-input'),
  body: document.body,
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const darkTheme = loadStorage('Theme');

if (darkTheme === 'DARK') {
  refs.themeCheckbox.checked = true;
  refs.body.classList.add(Theme.DARK);
}

refs.themeCheckbox.addEventListener('change', hendleChange);

function hendleChange(e) {
  if (e.currentTarget.checked === true) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    saveStorage('Theme', 'DARK');
  } else if (e.currentTarget.checked === false) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    saveStorage('Theme', 'LIGHT');
  }
}
