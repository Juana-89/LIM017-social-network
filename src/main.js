/* eslint-disable import/no-cycle */
/* eslint-disable function-paren-newline */
// const mainPage = document.querySelector('.main_home_page');
// Hace que un texto desaparezca
// const textBienvenida = document.querySelector('.h1_welcome0');
// const disappearText = function () {
//   textBienvenida.style.display = 'none';
// };
// setTimeout(disappearText, 9000);
import { welcome } from './components/home.js';
import { login } from './components/login.js';

const mainFirstPage = document.querySelector('.show_home_page');

const routes = {
  '/': welcome,
  '/login': login,

};

export const onNavigate = (pathname) => {
  // document.querySelector('.container_welcome').style.display = 'none';
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  mainFirstPage.innerHTML = '';

  mainFirstPage.appendChild(routes[pathname]());
};

// guarda el historial de navegación del usuario mediante las flechas
const component = routes[window.location.pathname];
window.onpopstate = () => {
  mainFirstPage.appendChild(component());
};
mainFirstPage.appendChild(component());

// const btnStart = document.querySelector('.btn_start');
// const mainFirstPage = document.querySelector('.show_home_page');

// btnStart.addEventListener('click', firstPage);
// function firstPage() {
//   document.querySelector('.container_welcome').style.display = 'none';
//   const divForm = document.createElement('div');
//   divForm.classList.add('container_form');
//   divForm.innerHTML = `<form class="form_info animated fadeInUp">
//   <h1 class="form_h1_title">Inicia sesión</h1>
//   <input type="text" class="form_inp" placeholder="Correo electrónico"/>
//   <input type="password" class="form_inp" placeholder="Contraseña"/>
//   <button type="submit" class="form_btn">Loguéate</button>
//   <h3 class="form_h3_pie">¿Olvidaste tu contraseña?</h3>
//   <h3 class="form_h3_pie">Crear cuenta</h3>
//   </form> `;
//   mainFirstPage.appendChild(divForm);
// }
