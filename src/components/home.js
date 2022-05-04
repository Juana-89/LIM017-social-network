/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const welcome = () => {
  const divWelcome = document.createElement('div');
  divWelcome.classList.add('container_welcome');

  const h1Welcome0 = document.createElement('h1');
  h1Welcome0.classList.add('h1_welcome0');
  h1Welcome0.innerHTML = 'Tusuy Perú';

  const h1Welcome1 = document.createElement('h1');
  h1Welcome1.classList.add('h1_welcome1');
  h1Welcome1.innerHTML = 'Bienvenid@ a la red social favorita en danzas folklóricas peruanas donde podrás encontrar la información que necesitas.';

  const btnStart = document.createElement('button');
  btnStart.classList.add('btn_start');
  btnStart.textContent = 'Únete';

  btnStart.addEventListener('click', () => onNavigate('/login'));

  divWelcome.appendChild(h1Welcome0);
  divWelcome.appendChild(h1Welcome1);
  divWelcome.appendChild(btnStart);

  return divWelcome;
};
