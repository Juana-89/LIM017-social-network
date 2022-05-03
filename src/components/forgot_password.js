/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { sendEmailForgotPassword } from '../.firebase/auth.js';

export const forgot = () => {
  const divForgotPassword = document.createElement('div');
  divForgotPassword.classList.add('container_register');
  divForgotPassword.innerHTML = `<form class="form_forgot_password animated fadeInUp">
    <h1 class="form_h1_title">¿No puedes iniciar sesión?</h1>
    <h2 class="form_h3_inf">Indícanos el correo donde te enviaremos un enlace de recuperación</h2>
    <input type="email" id="inp_email_forgot" class="form_inp_create" placeholder="Ingresa correo" required/>
    <input type="submit" id="btn_submit1" class="form_btn" value ="Enviar enlace de recuperación"/>
    <h3 id="btn_forgot_password" class="form_h3_pie">Regresa a iniciar sesión</h3>`;

  divForgotPassword.querySelector('#btn_forgot_password').addEventListener('click', () => onNavigate('/login'));

  divForgotPassword.querySelector('#btn_submit1').addEventListener('click', (e) => {
    e.preventDefault;
    sendEmailForgotPassword();
  });

  return divForgotPassword;
};
