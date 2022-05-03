import { welcome } from '../../../src/components/home';
jest.mock('.../../../src/.firebase/index');

describe('welcome', () => {
  it('debería ser una función', () => {
    expect(typeof welcome).toBe('function');
  });
});
