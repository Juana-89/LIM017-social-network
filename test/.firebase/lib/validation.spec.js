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