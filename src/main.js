/* eslint-disable no-use-before-define */
// const mainPage = document.querySelector('.main_home_page');
// Hace que un texto desaparezca
// const textBienvenida = document.querySelector('.h1_welcome0');
// const disappearText = function () {
//   textBienvenida.style.display = 'none';
// };
// setTimeout(disappearText, 9000);
const btnStart = document.querySelector('.btn_start');
const mainFirstPage = document.querySelector('.show_home_page');

btnStart.addEventListener('click', firstPage);
function firstPage() {
  document.querySelector('.container_welcome').style.display = 'none';
  const divForm = document.createElement('div');
  divForm.classList.add('container_form');
  divForm.innerHTML = `<form class="form_info animated fadeInUp">
  <h1 class="form_h1_title">Inicia sesión</h1>
  <input type="text" class="form_inp" placeholder="Correo electrónico"/>
  <input type="password" class="form_inp" placeholder="Contraseña"/>
  <button type="submit" class="form_btn">Loguéate</button>
  <h3 class="form_h3_pie">¿Olvidaste tu contraseña?</h3>
  <h3 class="form_h3_pie">Crear cuenta</h3>
  </form> `;
  mainFirstPage.appendChild(divForm);
}
