import { login } from '../../../src/components/login';
import { signInUserFunction } from '../../../src/.firebase/controllers';
jest.mock('.../../../src/.firebase/index');

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
});

describe('signInUser', () => {
  it('debería retornar un objeto', () => {
    const email = 'usuario@hotmail.es';
    const password = '111111';
    expect(typeof signInUserFunction(email, password)).toBe('object');
  });
  it('debería de retornar true:', () => {
    const email = 'usuario@hotmail.es';
    const password = '111111';
    const result = signInUserFunction(email, password);

      expect(result).toBe({});
  

  });
});