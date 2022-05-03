/* eslint-disable import/no-cycle */
import { signInGmail, signInFacebook, signInUser } from '../.firebase/auth.js';
import { onNavigate } from '../main.js';

export const login = () => {
  const divForm = document.createElement('div');
  divForm.classList.add('container_form');
  divForm.innerHTML = `<form class="form_info animated fadeInUp">
    <h1 class="form_h1_title">Inicia sesión</h1>
    <input type="email" id="inp_email" class="form_inp" placeholder="Correo electrónico" name="email" required/>
    <input type="password" id="inp_password" class="form_inp" placeholder="Contraseña" name="password" required/>
    <button type="submit" id="btn_login_user" class="form_btn">Loguéate</button>
    <div id="login_gmail" class="label_rrss"><img class="ico_google" src ="./media/google.png"><h3 class="form_h3_pie_rrss">Continuar con tu Gmail</h3></div>
    <div id="login_facebook" class="label_rrss"><img class="ico_facebook" src ="./media/facebook.png"><h3 class="form_h3_pie_rrss">Continuar con Facebook</h3></div>
    <h3 id="btn_forgot_password" class="form_h3_pie">¿Olvidaste tu contraseña?</h3>
    <h3 id="btn_create_user" class="form_h3_pie">Crear cuenta</h3>
    </form> `;

  divForm.querySelector('#btn_forgot_password').addEventListener('click', () => onNavigate('/forgot'));
  divForm.querySelector('#btn_create_user').addEventListener('click', () => onNavigate('/register'));

  // Iniciar sesión con Gmail
  divForm.querySelector('#login_gmail').addEventListener('click', () => {
    signInGmail();
  });

  // Iniciar sesión con Facebook
  divForm.querySelector('#login_facebook').addEventListener('click', () => {
    signInFacebook();
  });

  // Acceso de usuarios existentes
  divForm.querySelector('.form_info').addEventListener('submit', (e) => {
    e.preventDefault();
    const emailUserRegister = document.querySelector('#inp_email').value;
    const passwordUserRegister = document.querySelector('#inp_password').value;
    signInUser(emailUserRegister, passwordUserRegister);
  });

  return divForm;
};
