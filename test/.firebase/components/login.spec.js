import { login } from '../../../src/components/login';
import { forgot } from '../../../src/components/forgot_password';
import { register } from '../../../src/components/register';
import { signInWithPopup } from '../../../src/.firebase/index';
import { signInGmail, signInFacebook } from '../../../src/.firebase/auth';
import { onNavigate } from '../../../src/main';

jest.mock('.../../../src/.firebase/index');
//jest.mock('../../../src/components/navigation.js');

describe('Probando login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
});

describe('Error al loguearse', () => {
  it('debería mostrar mensaje de error si no existe cuenta', () => {
    const signIn = jest.fn((email, password) => Promise.resolve({email,password}));
    const success = login();
    const btnLogin = success.querySelector('#btn_login_user');
    const inpEmail = 'juana@dominio.com';
    const inpPassword = '111111';

    btnLogin.dispatchEvent(new Event('click'));
    signIn(inpEmail, inpPassword).catch((error) => {
      setTimeout(() => {
    expect(error).toEqual(signIn.mockRejectedValue('Auth/Password are wrong'));
      });
    });
  });
});

describe('Clickear en Gmail y que muestre Popup', () => {
  it('debería de llamar a Google Account', () => {
    const success = login();
    const btnGmail = success.querySelector('#login_gmail');
    btnGmail.dispatchEvent(new Event('click'));
    expect(signInWithPopup).toHaveBeenCalled()
  });
});

describe('Clickear en Facebook y que muestre Popup', () => {
  it('debería de llamar a Google Account', () => {
    const success = login();
    const btnFacebook = success.querySelector('#login_facebook');
    btnFacebook.dispatchEvent(new Event('click'));
    expect(signInWithPopup).toHaveBeenCalled()
  });
});

describe('Vista de otras ventanas', (done) => {
  it('debería enviarnos a la vista de "Olvidé contraseña"', () => { 
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const forgotView = forgot();
    setTimeout(() => {
    expect(onNavigate('/forgot')).toEqual(forgotView);
    done();
    });
  });

  it('debería enviarnos a la vista de "Crear nueva cuenta"', () => { 
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const registerView = register();
    setTimeout(() => {
    expect(onNavigate('/register')).toEqual(registerView);
    done();
    });
  });
});

describe('Loguearse con RRSS', () => {
  it('debería loguearse con "Gmail"', () => { 
    expect(signInGmail()).toHaveBeenCalled
  });

  it('debería loguearse con "Facebook"', () => { 
  expect(signInFacebook()).toHaveBeenCalled
})
});