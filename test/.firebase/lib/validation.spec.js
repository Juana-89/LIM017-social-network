import { register } from '../../../src/components/register';
import { expressions } from '../../../src/lib/validation';
import { validationFields } from '../../../src/lib/validation';
import { validationPassword } from '../../../src/lib/validation';
import { validationForm } from '../../../src/lib/validation';

jest.mock('.../../../src/.firebase/index');

describe('Probando funciones/objetos', () => {
    it('debería ser un objeto', () => {
      expect(typeof expressions).toBe('object');
    });
    it('debería ser un función', () => {
      expect(typeof validationFields).toBe('function');
    });
    it('debería ser un función', () => {
     expect(typeof validationPassword).toBe('function');
    });
    it('debería ser un función', () => {
     expect(typeof validationForm).toBe('function');
    });
  });

describe('ValidationForm', () => {
    fit('debería ser un objeto', () => {
    const success = register();
    const inpEmail = success.querySelector('#inp_email');
    //const divEmail = success.querySelector('#form_div_group_email').classList.add('form_group_info_user-correct');
    inpEmail.value ='juana@dominio.com';
    if (validationFields(expression, input, field)) {
        success
    }
    (expressions.email, inpEmail.value);
         
    });
});