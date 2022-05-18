import { signInGmail, signInFacebook, signInUser, sendEmailForgotPassword, logout } from '../../src/.firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from '../../src/.firebase/index';
import { signInUserFunction } from '../../src/.firebase/controllers'

jest.mock('.../../../src/.firebase/index');

describe('Probando funciones de Auth', () => {
    beforeEach(() => signInWithEmailAndPassword.mockClear());
    beforeEach(() => createUserWithEmailAndPassword.mockClear());
    it('debería de loguearse con signInGmail', () => {
        expect(signInGmail())
    });

    it('debería de mostrar error en signInGmail', () => {
        signInGmail().catch((error) => {
        expect(error).toEqual(signInGmail.mockRejectedValue('Google: Auth/Password are wrong'));
    });
    });

    it('debería de loguearse con signInFacebook', () => {
        expect(signInFacebook())
    });

    it('debería de mostrar error en signInFacebook', () => {
        signInFacebook().catch((error) => {
        expect(error).toEqual(signInFacebook.mockRejectedValue('Facebook: Auth/Password are wrong'));
    });
    });

    it('debería poder loguearse: signInUser', () =>  signInUserFunction('juana@dominio.com', '111111')     
      .then(() => {
        expect(signInWithEmailAndPassword.mock.calls[0][1]).toStrictEqual('juana@dominio.com');
        expect(signInWithEmailAndPassword.mock.calls[0][2]).toStrictEqual('111111');
        expect(console.log('usuario registrado'));
      }));

      it('debería salir mensaje de error de ingresar datos incorrectos: signInUser', () =>  signInUserFunction('juana@dominio.com', '111111')     
      .then(() => {
        expect(signInWithEmailAndPassword.mock.calls[0][1]).toStrictEqual('juana@dominio.com');
        expect(signInWithEmailAndPassword.mock.calls[0][2]).toStrictEqual('111111');
        signInUserFunction().catch((error) => {
        expect(error).toEqual(signInUser.mockRejectedValue('Auth/Password are wrong'));
      });
    }));
})