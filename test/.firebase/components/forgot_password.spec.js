import { forgot } from '../../../src/components/forgot_password';
import { login } from '../../../src/components/login';
import { onNavigate } from '../../../src/main';
import { sendEmailForgotPassword } from '../../../src/.firebase/index';

jest.mock('.../../../src/.firebase/index');

describe('forgot', () => {
  it('debería ser una función', () => {
    expect(typeof forgot).toBe('function');
  });
});
describe('Error al enviar correo no existente', () => {
  it('debería mostrar mensaje de error si no existe cuenta en la bd', () => {
    const sendEmail = jest.fn((email) => Promise.resolve({email}));
    const success = forgot();
    const btnSubmit = success.querySelector('#btn_submit1');
    const inpEmail = 'juana@dominio.com';
    btnSubmit.dispatchEvent(new Event('click'));
    sendEmail(inpEmail).catch((error) => {
      setTimeout(() => {
    expect(error).toEqual(signIn.mockRejectedValue('Auth does not exist'));
      });
    });
  });
});

describe('Vista de otras ventanas', () => {
  it('debería enviarnos a la vista de "Login"', (done) => { 
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const loginView = document.querySelector('.show_home_page');
    const success = login();
    loginView.appendChild(success)
    // const btnLogin = success.querySelector('#btn_forgot_password');
    // btnLogin.dispatchEvent(new Event('click'));
    setTimeout(() => {
    expect(loginView.innerHTML);
    done();
    });
  });
});

describe('Hacer click al botón', () => {
  it('debería hacer click en el botón de "Enviar correo de recuperación"', () => { 
   // document.body.innerHTML = '<main class="show_home_page"></main>';
   const registerView = forgot();
    const btnForgot = registerView.querySelector('#btn_submit1');
    // const btnLogin = success.querySelector('#btn_forgot_password');
    btnForgot.dispatchEvent(new Event('click'));
    //setTimeout(() => {s
    expect(sendEmailForgotPassword).toHaveBeenCalled
    //});
  });
});