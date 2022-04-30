// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
import { initializeApp } from '../src/.firebase/index.js';
import { signInGmail } from '../src/.firebase/auth.js';
// '../src/components/login.js';

describe('signInGmail', () => {
  it('debería ser una función', () => {
    expect(typeof initializeApp(signInGmail)).toBe('function');
  });
});
