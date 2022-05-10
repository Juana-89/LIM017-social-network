import { loginGmailFunction, loginFacebookFunction, signInUserFunction, 
         createNewUserFunction, sendEmailForgotPasswordFunction, 
         logoutFunction } from '../.firebase/controllers.js';
import { onNavigate } from '../main.js';

export const signInGmail = () => {
    return loginGmailFunction()
    .then(result => {
    console.log(result.user)
    console.log('se logueo con Gmail');
    setTimeout(function () {onNavigate('/wall')}, 3000);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + errorMessage);
    console.log(errorCode + errorMessage)
    });
};

export const signInFacebook = () => {
    return loginFacebookFunction()
    .then(result => {
    console.log(result.user)
    console.log('se logueo con Facebook' );
    setTimeout(function () {onNavigate('/wall')}, 3000);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + errorMessage);
    console.log(errorCode + errorMessage)
    });
};

export const signInUser = (email, password) => {
    return signInUserFunction(email, password)
    .then(userCredential => {
    Swal.fire({
        title: '¡Hola! otra vez',
        text: 'Ingresaste con éxito',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: 2000
        })
    console.log("¡Entraste con éxito!", userCredential.user)
    setTimeout(function () {onNavigate('/wall')}, 2500);
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

    return createNewUserFunction(email, password)
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
};

export const sendEmailForgotPassword = () => {
    const email = document.querySelector('#inp_email_forgot').value;
    return sendEmailForgotPasswordFunction(email)
    .then(() => {
    Swal.fire({
        title: 'Correo electrónico de restablecimiento de contraseña enviado a: ',
        text: email,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: 5000
        })
    })
    .catch((error) => {
    Swal.fire({
        title: 'Ocurrió el siguiente error: ' ,
        text: error,
        icon: 'error',
        confirmButtonText: 'Aceptar'
        })
        return false;
    });
    // return false;
};

export const logout = () => {
    return logoutFunction(auth)
    .then(() => {
        console.log('probando')
    alert('se cerró sesión')
    // Swal.fire({
    //     titleText: '¿Deseas cerrar sesión?',
    //     icon: 'question',
    //     showDenyButton: true,
    //     showCancelButton: true
    //     })
    })
    .catch((error) => {
        // An error happened.
    alert(error)
    return false
    });
};