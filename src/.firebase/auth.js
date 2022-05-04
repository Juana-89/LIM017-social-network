import { loginGmailFunction, loginFacebookFunction, signInUserFunction, createNewUserFunction } from '../.firebase/controllers.js';
import { onNavigate } from '../main.js';

export const signInGmail = () => {
    loginGmailFunction()
    .then(result => {
    console.log(result)
    console.log('se logueo con Gmail');
    setTimeout(function () {onNavigate('/navigation')}, 3000);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + errorMessage);
    console.log(errorCode + errorMessage)
    });
};

export const signInFacebook = () => {
    loginFacebookFunction()
    .then(result => {
    console.log(result)
    console.log('se logueo con Facebook' );
    setTimeout(function () {onNavigate('/navigation')}, 3000);
    }) 
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + errorMessage);
    console.log(errorCode + errorMessage)
    });
};

export const signInUser = (email, password) => {
    signInUserFunction(email, password)
    .then(userCredential => {
    Swal.fire({ 
        title: '¡Hola! otra vez',
        text: 'Ingresaste con éxito',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: 2000
    })
    console.log("¡Entraste con éxito!", userCredential.user)
    setTimeout(function () {onNavigate('/navigation')}, 2500);
    })
    .catch((error) => {
    Swal.fire({ 
        title: '¡Oh no!',
        text: 'No pudiste loguearte por el siguiente motivo: ' + error,
        icon: 'error',
        confirmButtonText: 'Aceptar'
    })
    return false;
    })
};

export const createNewUser = () => {
    const email = document.querySelector('#inp_email').value;
    const password = document.querySelector('#inp_password1').value;

    createNewUserFunction(email, password)
    .then(() => {
    Swal.fire({ 
        title: '¡Genial!',
        text: 'Ahora formas parte de nuestra comunidad Tusuy Perú',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: 3500 
    })
    setTimeout(function () {onNavigate('/login')}, 4000);
    })
    .catch((error) => {
    Swal.fire({ 
        title: '¡Oh no!',
        text: 'Ocurrió el siguiente error: ' + error,
        icon: 'error',
        confirmButtonText: 'Aceptar'
    })
    return false;
    });
    }