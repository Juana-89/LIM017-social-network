import { onNavigate } from '../main.js';
import { createNewUser } from '../.firebase/auth.js';
import { validationForm } from '../lib/validation.js';

export const register = () => {
  const divRegister = document.createElement('div');
  divRegister.classList.add('container_register');
  divRegister.innerHTML = ` <form id="form_create_user" class="form_register animated fadeInUp">
    <h1 class="form_h1_title">Crear cuenta</h1>
    <div id="form_div_group_user" class="form_group_user">
    <div class="form_group_input">
    <input type="text" id="inp_name_user" class="form_inp_create" name="user" placeholder="Ingresa usuario" required/>
    <i id="form_ico_state_good" class="form_ico_state fa-solid fa-circle-check"></i>
    <i id="form_ico_state_bad" class="form_ico_state fa-solid fa-circle-xmark"></i>
    </div>
    </div>
    <div id="form_div_group_realname" class="form_group_info_user">
    <div class="form_group_input">
    <input type="text" id="inp_realname" class="form_inp_create" name="realname" placeholder="Ingresa nombre" required/>
    <i id="form_ico_state_good" class="form_ico_state fa-solid fa-circle-check"></i>
    <i id="form_ico_state_bad" class="form_ico_state fa-solid fa-circle-xmark"></i>
    </div>
    </div>
    <div id="form_div_group_email" class="form_group_info_user">
    <div class="form_group_input">
    <input type="email" id="inp_email" class="form_inp_create" name="email" placeholder="Ingresa correo" required/>
    <i id="form_ico_state_good" class="form_ico_state fa-solid fa-circle-check"></i>
    <i id="form_ico_state_bad" class="form_ico_state fa-solid fa-circle-xmark"></i>
    </div>
    </div>
    <div id="form_div_group_password1" class="form_group_info_user">
    <div class="form_group_input">
    <input type="password" id="inp_password1" class="form_inp_create" name="password1" placeholder="Ingresa contraseña" required/>
    <i id="form_ico_state_good" class="form_ico_state fa-solid fa-circle-check"></i>
    <i id="form_ico_state_bad" class="form_ico_state fa-solid fa-circle-xmark"></i>
    </div>
    </div>
    <div id="form_div_group_password2" class="form_group_info_user">
    <div class="form_group_input"><input type="password" id="inp_password2" class="form_inp_create" name="password2" placeholder="Vuelve a escribir contraseña" required/>
    <i id="form_ico_state_good" class="form_ico_state fa-solid fa-circle-check"></i>
    <i id="form_ico_state_bad" class="form_ico_state fa-solid fa-circle-xmark"></i>
    </div><p class="form_input_error">Contraseña debe de ser igual que la anterior</p>
    </div>
    <div class="form_btn_create">
    <h3 id="btn_forgot_user" class="form_h3_pie">¿Tienes cuenta?</h3>
    <input type="submit" id="btn_submit" class="form_btn" value ="Regístrate"/>
    </div>
    <div class="form_message">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <p class="form_p_message_warning">Error: Rellena los campos correctamente</p>
    </div>
   `;

  divRegister.querySelector('#btn_forgot_user').addEventListener('click', () => onNavigate('/login'));
  const inputs = divRegister.querySelectorAll('#form_create_user input');

  //Validación de inputs
  inputs.forEach((input) => {
    input.addEventListener('keyup', validationForm);
    input.addEventListener('blur', validationForm);
  })
  //Creación de nuevo usuario
  divRegister.querySelector('#btn_submit').addEventListener('click', (e) => {
    e.preventDefault();
    createNewUser();
  });
    
return divRegister;
};