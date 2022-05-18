import { register } from '../../../src/components/register';
import { login } from '../../../src/components/login';
import { createNewUser } from '../../../src/.firebase/auth';
import { onNavigate } from '../../../src/main';

jest.mock('.../../../src/.firebase/index');

describe('Probando register', () => {
    it('debería ser una función', () => {
      expect(typeof register).toBe('function');
    });
  });

describe('Validación de inputs', () => {
    it('debería mostrar mensaje de error si el email está mal ingresado', () => {
      const success = register();
      const inpEmail = success.querySelector('#inp_email');
      inpEmail.value = 'juana';
      expect(success.innerHTML = '<i id="form_ico_state_bad" class="form_ico_state fa-solid fa-circle-xmark"></i><p class="form_input_error">Correo electrónico mal ingresado. Ejemplo de email: usuario@dominio.com</p>');
    });
    it('debería mostrar mensaje de error si la contraseña no tiene como mínimo 6 caracteres', () => {
      const success = register();
      const inpPassword1 = success.querySelector('#inp_password1');
      inpPassword1.value = '11111';
      expect(success.innerHTML = '<i id="form_ico_state_bad" class="form_ico_state fa-solid fa-circle-xmark"></i><p class="form_input_error">Contraseña debe de contener entre 6 a 12 caracteres</p>');
    });
    it('debería mostrar mensaje de error si la contraseña no coincide con la anterior', () => {
      const success = register();
      const inpPassword1 = success.querySelector('#inp_password1');
      const inpPassword2 = success.querySelector('#inp_password2');
      inpPassword1.value ='111111';
      inpPassword2.value ='222222'
      if(!inpPassword1.value === inpPassword2.value){
        expect(success.innerHTML = '<i id="form_ico_state_bad" class="form_ico_state fa-solid fa-circle-xmark"></i><p class="form_input_error">Contraseña debe de contener entre 6 a 12 caracteres</p>');
      }});
    });

 describe('Vista de otras ventanas', (done) => {
    it('debería enviarnos a la vista de "Login"', () => { 
      document.body.innerHTML = '<main class="show_home_page"></main>';
      const loginView = login();
      setTimeout(() => {
        expect(onNavigate('/login')).toEqual(loginView);
        done();
      });
    });
});