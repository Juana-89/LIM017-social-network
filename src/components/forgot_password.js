/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const forgot = () => {
  const divForgotPassword = document.createElement('div');
  divForgotPassword.classList.add('container_register');
  divForgotPassword.innerHTML = `<form class="form_forgot_password animated fadeInUp">
    <h1 class="form_h1_title">¿No puedes iniciar sesión?</h1>
    <h2 class="form_h3_pie">Indícanos el correo donde te enviaremos un enlace de recuperación</h2>
    <input type="email" class="form_inp_create" placeholder="Ingresa correo" required="required"/>
    <input type="submit" class="form_btn" value ="Enviar enlace de recuperación"/>
    <h3 id="btn_forgot_password" class="form_h3_pie">Regresa a iniciar sesión</h3>`;
  divForgotPassword.querySelector('#btn_forgot_password').addEventListener('click', () => onNavigate('/login'));

  return divForgotPassword;
};
