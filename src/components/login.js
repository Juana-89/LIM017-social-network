export const login = () => {
//   const btnStart = document.querySelector('.btn_start');

  //   btnStart.addEventListener('click', firstPage);
  //   function firstPage() {
//   document.querySelector('.container_welcome').style.display = 'none';
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
  return divForm ;

};
