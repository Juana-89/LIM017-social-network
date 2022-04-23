/* eslint-disable import/no-cycle */
import { initializeApp } from '../.firebase/index.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { onNavigate } from '../main.js';

export const forgot = () => {
    const divForgotPassword = document.createElement('div');
    divForgotPassword.classList.add('container_register');
    divForgotPassword.innerHTML = `<form class="form_forgot_password animated fadeInUp">
    <h1 class="form_h1_title">¿No puedes iniciar sesión?</h1>
    <h2 class="form_h3_pie">Indícanos el correo donde te enviaremos un enlace de recuperación</h2>
    <input type="email" id="inp_email_forgot" class="form_inp_create" placeholder="Ingresa correo" required/>
    <input type="submit" id="btn_submit" class="form_btn" value ="Enviar enlace de recuperación"/>
    <h3 id="btn_forgot_password" class="form_h3_pie">Regresa a iniciar sesión</h3>`;

    divForgotPassword.querySelector('#btn_forgot_password').addEventListener('click', () => onNavigate('/login'));


   ///////
   const firebaseConfig = {
    apiKey: 'AIzaSyBVeQvlxGrnQPSMtHDBANiwk-MTOvyNcb8',
    authDomain: 'tusuy-peru.firebaseapp.com',
    projectId: 'tusuy-peru',
    storageBucket: 'tusuy-peru.appspot.com',
    messagingSenderId: '1099409677796',
    appId: '1:1099409677796:web:19eea0a3ffa9bde940fbf1',
    measurementId: 'G-NM5V1TC45N',
  };
  const app = initializeApp(firebaseConfig);



 divForgotPassword.querySelector('#btn_submit').addEventListener('click', (e) => {
   e.preventDefault;
const email = document.querySelector('#inp_email_forgot').value;
const auth = getAuth();
auth.languageCode = 'es';

sendPasswordResetEmail(auth, email)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    // window.localStorage.setItem('emailForSignIn', email);

    console.log('Enviado, revísalo!', email);
    alert('Enviado, revísalo!', email);
    return true;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   alert (errorCode + errorMessage )
   return false;
  });
 });



  return divForgotPassword;
};
