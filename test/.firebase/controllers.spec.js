import { loginGmailFunction, loginFacebookFunction, signInUserFunction, createNewUserFunction, sendEmailForgotPasswordFunction, logoutFunction  } from '../../src/.firebase/controllers';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut  } from '../../src/.firebase/index';

jest.mock('.../../../src/.firebase/index');

describe('Creación de nuevo usuario', () => {
  it('debería de retornar un objeto', () => {
      document.body.innerHTML = '<main class="show_home_page"></main>';
      createNewUserFunction().then((user) => {
        expect(user).toBe(object)
      })
      .catch(() => {
      })
    })
  });

  describe('Login Gmail', () => {
    it('debería de retornar un objeto', () => {
      document.body.innerHTML = '<main class="show_home_page"></main>';
      loginGmailFunction().then((user) => {
        expect(user).toBe(object)
      })
      .catch(() => {
      })
    })
  });
    
  describe('Facebook', () => {
      it('debería de retornar un objeto', () => {
        document.body.innerHTML = '<main class="show_home_page"></main>';
        loginFacebookFunction().then((user) => {
         expect(user).toBe(object)
        })
        .catch(() => {
        })
      })
  });
//Útil para crear funciones simuladas asincrónicas que siempre rechazarán
  describe('signInUserFunction', () => {
      it('Mensaje de error si se loguea incorrectamente', () => {
        const signInUserFunction = jest.fn();
        signInUserFunction.mockRejectedValue({ error: 'Incorrect password' });
        });
  });

  describe('Funciones de Firebase', () => {
    beforeEach(() => signInWithEmailAndPassword.mockClear());
    beforeEach(() => createUserWithEmailAndPassword.mockClear());
      it('signInUserFunction: Debería poder loguearse', () =>  signInUserFunction('juana@dominio.com', '111111')     
      .then(() => {
        expect(signInWithEmailAndPassword.mock.calls[0][1]).toStrictEqual('juana@dominio.com');
        expect(signInWithEmailAndPassword.mock.calls[0][2]).toStrictEqual('111111');
      }));

      it('createNewUserFunction: Debería poder crear nuevo usuario', () =>  createNewUserFunction('juana@dominio.com', '111111')     
      .then(() => {
        expect(createUserWithEmailAndPassword).toHaveBeenCalled();
        expect(createUserWithEmailAndPassword.mock.calls[0][1]).toStrictEqual('juana@dominio.com');
        expect(createUserWithEmailAndPassword.mock.calls[0][2]).toStrictEqual('111111');

      }));
    
      it('sendEmailForgotPasswordFunction: Debería poder recibir correo de reset password', () =>  sendEmailForgotPasswordFunction('juana@dominio.com')     
      .then(() => {
        expect(sendPasswordResetEmail.mock.calls[0][1]).toStrictEqual('juana@dominio.com');
      }));
    
      it('logoutFunction: Debería poder cerrar sesión', () =>  logoutFunction()     
      .then(() => {
        expect(signOut).toHaveBeenCalled();
      }));
  });
