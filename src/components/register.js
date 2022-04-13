import { onNavigate } from '../main.js';

export const register = () => {
//   const btnStart = document.querySelector('.btn_start');
  //   btnStart.addEventListener('click', firstPage);
  //   function firstPage() {
//   document.querySelector('.container_welcome').style.display = 'none';
  const divRegister = document.createElement('div');
  divRegister.classList.add('container_register');
  divRegister.innerHTML = ` <form class="form_register animated fadeInUp">
    <h1 class="form_h1_title">Crear cuenta</h1>
    <input type="text" class="form_inp_create" placeholder="Ingresa nombre"/>
    <input type="text" class="form_inp_create" placeholder="Ingresa apellido"/>
    <input type="text" class="form_inp_create" placeholder="Ingresa correo"/>
    <input type="password" class="form_inp_create" placeholder="Ingresa contraseña"/>
    <input type="password" class="form_inp_create" placeholder="Vuelve a escribir contraseña"/>
    <h3 id="btn_forgot_user" class="form_h3_pie">¿Tienes cuenta?</h3>
    <input type="button" class="form_btn" value ="Regístrate"/>`;

divRegister.querySelector("#btn_forgot_user").addEventListener('click', () => onNavigate('/login')); 

  return divRegister;
};
