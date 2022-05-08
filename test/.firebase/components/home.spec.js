import { welcome } from '../../../src/components/home';
import { login } from '../../../src/components/login';
jest.mock('.../../../src/.firebase/index');

describe('welcome', () => {
  it('debería ser una función', () => {
    expect(typeof welcome).toBe('function');
  });
});

describe('Hacer click al botón', () => {
  it('debería hacer click en el botón de "Únete"', () => { 
   document.body.innerHTML = '<main class="show_home_page"></main>';
   const registerView = welcome();
   const loginView = login();
    const btnWelcome = registerView.querySelector('.btn_start');
    const mainFirstPage = document.querySelector('.show_home_page');
    // const btnLogin = success.querySelector('#btn_forgot_password');
    mainFirstPage.appendChild(registerView);
    btnWelcome.dispatchEvent(new Event('click'));
    //setTimeout(() => {s
    expect(mainFirstPage.innerHTML)
    //});
  });
});