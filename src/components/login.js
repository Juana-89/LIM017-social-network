import { onNavigate } from '../main.js';

export const login = () => {
    const divForm = document.createElement('div');
    divForm.classList.add('container_form');
    divForm.innerHTML = `<form class="form_info animated fadeInUp">
    <h1 class="form_h1_title">Inicia sesión</h1>
    <input type="text" class="form_inp" placeholder="Correo electrónico"/>
    <input type="password" class="form_inp" placeholder="Contraseña"/>
    <button type="submit" class="form_btn">Loguéate</button>
    <div class="label_rrss"><img class="ico_facebook" src ="./media/facebook.png"><h3 class="form_h3_pie_rrss">Continuar con Facebook</h3></div>
    <div class="label_rrss"><img class="ico_instagram" src ="./media/instagram.png"><h3 class="form_h3_pie_rrss">Continuar con Instagram</h3></div>
    <h3 id="btn_forgot_password" class="form_h3_pie">¿Olvidaste tu contraseña?</h3>
    <h3 id="btn_create_user" class="form_h3_pie">Crear cuenta</h3>
    </form> `;

    divForm.querySelector('#btn_forgot_password').addEventListener('click', () => onNavigate('/forgot')); 
    divForm.querySelector('#btn_create_user').addEventListener('click', () => onNavigate('/register')); 
  
    return divForm;
}