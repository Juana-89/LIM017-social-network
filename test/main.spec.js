/* eslint-disable jest/no-focused-tests */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-expect */
// importamos la funcion que vamos a testear
// import { onNavigate } from '../src/main';
import { welcome } from '../src/components/home';
import { login } from '../src/components/login';
import { register } from '../src/components/register';
import { forgot } from '../src/components/forgot_password';
import { onNavigate } from '../src/main';
import { wall } from '../src/components/wall';

jest.mock('.../../../src/.firebase/index');
jest.mock('../src/components/wall.js');

describe('Ver devolución de vistas históricas', () => {
  it('debería de devolver la vista: home', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const mainFirstPage = document.querySelector('.show_home_page');
    const registerView = welcome();
    mainFirstPage.appendChild(registerView);
    expect(mainFirstPage.innerHTML);
  });

  it('debería de devolver la vista: login', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const mainFirstPage = document.querySelector('.show_home_page');
    const loginView = login();
    mainFirstPage.appendChild(loginView);
    expect(mainFirstPage.innerHTML);
  });

  it('debería de devolver la vista: register', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const mainFirstPage = document.querySelector('.show_home_page');
    const registerView = register();
    mainFirstPage.appendChild(registerView);
    expect(mainFirstPage.innerHTML);
  });

  it('debería de devolver la vista: forgot', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const mainFirstPage = document.querySelector('.show_home_page');
    const forgotView = forgot();
    mainFirstPage.appendChild(forgotView);
    expect(mainFirstPage.innerHTML);
  });

  it('debería de devolver la vista: dashboard', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const mainFirstPage = document.querySelector('.show_home_page');
    const navigationView = wall();
    mainFirstPage.appendChild(navigationView);
    expect(mainFirstPage.innerHTML);
  });
});

describe('onNavigate', (done) => {
  it('debería enviarnos a "Home"', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const homeView = welcome();
    setTimeout(() => {
      expect(onNavigate('/')).toEqual(homeView);
      done();
    });
  });

  it('debería enviarnos a "Login"', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const loginView = login();
    setTimeout(() => {
      expect(onNavigate('/login')).toEqual(loginView);
      done();
    });
  });

  it('debería enviarnos a "Olvidé contraseña"', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const forgotView = forgot();
    setTimeout(() => {
      expect(onNavigate('/forgot')).toEqual(forgotView);
      done();
    });
  });

  it('debería enviarnos a "Crear nuevo usuario"', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const createView = register();
    setTimeout(() => {
      expect(onNavigate('/register')).toEqual(createView);
      done();
    });
  });

  it('debería enviarnos a "Wall"', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const naveView = wall();
    setTimeout(() => {
      expect(onNavigate('/wall')).toEqual(naveView);
      done();
    });
  });
});
// fit('debería enviarnos a "Wall"', (done) => {
//   document.body.innerHTML = '<main class="show_home_page"></main>';
//   const mainFirstPage = document.body.querySelector('.show_home_page');
//   const naveView = wall();
//   setTimeout(() => {
//     expect(onNavigate('/wall')).toEqual(mainFirstPage(naveView));
//     done();
//   });
// });
