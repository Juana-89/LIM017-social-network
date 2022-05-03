import { forgot } from '../../../src/components/forgot_password';
jest.mock('.../../../src/.firebase/index');

describe('forgot', () => {
  it('debería ser una función', () => {
    expect(typeof forgot).toBe('function');
  });
});
