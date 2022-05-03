import { login } from '../../../src/components/login';
jest.mock('.../../../src/.firebase/index');

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
});
