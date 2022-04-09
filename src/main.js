// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();
const mainPage = document.querySelector('.main_home_page');
const btnWelcome = document.querySelector('.btn_welcome');
btnWelcome.addEventListener('click', showSecondPage);
function showSecondPage(){
    mainPage.innerHTML ="";
    document.querySelector('.container_page_one').style.display = "visible";
    document.querySelector('.container_page_two').style.display = "visible";
}
//return showSecondaryPage();