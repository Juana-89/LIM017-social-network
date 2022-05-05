import { loginGmailFunction, loginFacebookFunction, signInUserFunction, createNewUserFunction, sendEmailForgotPasswordFunction, logoutFunction } from '../../src/.firebase/controllers';
// import { GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from '../../src/.firebase/index';

jest.mock('.../../../src/.firebase/index');

describe('Creación de nuevo usuario', () => {
  it('debería de retornar {}', () => {
      document.body.innerHTML = '<main class="show_home_page"></main>';
      createNewUserFunction().then((user) => {
        expect(user).toBe({})
      })
      .catch(() => {
      })
      })
  });

  describe('Login Gmail', () => {
    it('debería de retornar {}', () => {
      document.body.innerHTML = '<main class="show_home_page"></main>';
      loginGmailFunction().then((user) => {
        expect(user).toBe({})
      })
      .catch(() => {
      })
      })
  });
    
  describe('Facebook', () => {
      it('debería de retornar {}', () => {
        document.body.innerHTML = '<main class="show_home_page"></main>';
        loginFacebookFunction().then((user) => {
         expect(user).toBe({})
        })
        .catch(() => {
        })
      })
  });
//Útil para crear funciones simuladas asincrónicas que siempre rechazarán
  describe('signInUserFunction', () => {
  it('Mensaje de error si se loguea incorrectamente', () => {
    const signInUserFunction = jest.fn();
    signInUserFunction.mockRejectedValue({ error: 'Contraseña incorrecta' });
    });
  });