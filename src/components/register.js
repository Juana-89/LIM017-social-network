/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
// import { initializeApp } from '../.firebase/index.js';
// import { getFirestore, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
// import { getDatabase, set, ref } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js';
// import { getAuth, createUserWithEmailAndPassword } from '../.firebase/index.js';
import { createNewUser } from '../.firebase/auth.js';

export const register = () => {
  const divRegister = document.createElement('div');
  divRegister.classList.add('container_register');
  divRegister.innerHTML = ` <form class="form_register animated fadeInUp">
    <h1 class="form_h1_title">Crear cuenta</h1>
    <input type="text" id="inp_name_user" class="form_inp_create" placeholder="Ingresa usuario" name="user" required/>
    <input type="text" id="inp_realname" class="form_inp_create" placeholder="Ingresa nombre" name="name" required/>
    <input type="email" id="inp_email" class="form_inp_create" placeholder="Ingresa correo" name="email" required/>
    <input type="password" id="inp_password1" class="form_inp_create" placeholder="Ingresa contraseña" name="password1" required/>
    <input type="password" id="inp_password2" class="form_inp_create" placeholder="Vuelve a escribir contraseña" name="password2" required/>
    <h3 id="btn_forgot_user" class="form_h3_pie">¿Tienes cuenta?</h3>
    <input type="submit" id="btn_submit" class="form_btn" value ="Regístrate"/>`;

  divRegister.querySelector('#btn_forgot_user').addEventListener('click', () => onNavigate('/login'));
  divRegister.querySelector('#inp_name_user').addEventListener('keypress', validationOnlyLetters);
  divRegister.querySelector('#inp_realname').addEventListener('keypress', validationOnlyLetters);

  function validationOnlyLetters(letter) {
      if ((letter.keyCode < 65) || (letter.keyCode > 90) && (letter.keyCode < 97) || (letter.keyCode > 122)) 
      letter.returnValue = false;
     }
    
      divRegister.querySelector('#btn_submit').addEventListener('click', (e) =>{
     
    e.preventDefault();
    createNewUser();
    });
    
    return divRegister;
};

