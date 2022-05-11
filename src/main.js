/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
/* eslint-disable function-paren-newline */
import { welcome } from './components/home.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { forgot } from './components/forgot_password.js';
import { wall } from './components/wall.js';
// {Import the functions you need from the SDKs you need}

const mainFirstPage = document.querySelector('.show_home_page');

export const routes = {
  '/': welcome,
  '/login': login,
  '/register': register,
  '/forgot': forgot,
  '/wall': wall,
};

export const onNavigate = (pathname) => {
  console.log('estamos en onnavigate');
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (mainFirstPage.firstChild) {
    mainFirstPage.removeChild(mainFirstPage.firstChild);
  }
  mainFirstPage.appendChild(routes[pathname]());
};
console.log('estamos en onnavigate2');

window.addEventListener('DOMContentLoaded', () => {
  const component = routes[window.location.pathname];
  window.onpopstate = () => {
    while (mainFirstPage.firstChild) {
      mainFirstPage.removeChild(mainFirstPage.firstChild);
    }
    mainFirstPage.appendChild(routes[window.location.pathname]());
  };
  mainFirstPage.appendChild(component());
});
