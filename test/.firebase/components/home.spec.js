import { welcome } from '../../../src/components/home';
import { login } from '../../../src/components/login';
import { onNavigate } from '../../../src/main';

jest.mock('../../../src/.firebase/index');
jest.mock('../../../src/components/login.js');

describe('welcome', () => {
  it('debería ser una función', () => {
    expect(typeof welcome).toBe('function');
  });
});

describe('Hacer click al botón principal de la bienvenida', () => {
  it('debería hacer que el click "Únete" nos lleve a la página Login', (done) => { 
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const registerView = welcome();
    const loginView = login();
    const mainFirstPage = registerView.querySelector('.show_home_page');
    const btnWelcome = mainFirstPage.querySelector('.btn_start');
    
    mainFirstPage.appendChild(registerView);
    btnWelcome.dispatchEvent(new Event('click'));
    expect(onNavigate('/login').toEqual(loginView))
    done()
  });
});
