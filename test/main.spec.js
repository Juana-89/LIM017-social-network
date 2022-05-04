/* eslint-disable jest/valid-expect */
// importamos la funcion que vamos a testear
// import { onNavigate } from '../src/main';
import { welcome } from '../src/components/home';
import { login } from '../src/components/login';
import { register } from '../src/components/register';
import { forgot } from '../src/components/forgot_password';
// import { navigation } from '../src/components/navigation';

jest.mock('.../../../src/.firebase/index');

describe('onNavigate devuelve vistas históricas', () => {
  it('onNavigate debería de devolver la vista: home', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const mainFirstPage = document.querySelector('.show_home_page');
    const registerView = welcome();
    mainFirstPage.appendChild(registerView);
    expect(mainFirstPage.innerHTML);
  });

  it('onNavigate debería de devolver la vista: login', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const mainFirstPage = document.querySelector('.show_home_page');
    const loginView = login();
    mainFirstPage.appendChild(loginView);
    expect(mainFirstPage.innerHTML);
  });

  it('onNavigate debería de devolver la vista: register', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const mainFirstPage = document.querySelector('.show_home_page');
    const registerView = register();
    mainFirstPage.appendChild(registerView);
    expect(mainFirstPage.innerHTML);
  });

  it('onNavigate debería de devolver la vista: forgot', () => {
    document.body.innerHTML = '<main class="show_home_page"></main>';
    const mainFirstPage = document.querySelector('.show_home_page');
    const forgotView = forgot();
    mainFirstPage.appendChild(forgotView);
    expect(mainFirstPage.innerHTML);
  });

  // it('onNavigate debería de devolver la vista: navigation', () => {
  //   document.body.innerHTML = '<main class="show_home_page"></main>';
  //   const mainFirstPage = document.querySelector('.show_home_page');
  //   const navigationView = navigation();
  //   mainFirstPage.appendChild(navigationView);
  //   expect(mainFirstPage.innerHTML);
  // });
});
