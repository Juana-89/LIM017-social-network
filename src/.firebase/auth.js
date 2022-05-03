import { loginGmailFunction, loginFacebookFunction, signInUserFunction } from '../.firebase/controllers.js';
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

// import { getAuth, getFirestore, setDoc, doc, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from '../.firebase/index.js';
// import { app } from '../.firebase/config.js';
// import { onNavigate } from '../main.js';

// const auth = getAuth(app);
// const db = getFirestore(app);

// export const signInGmail = () => {
//     // return signInWithPopup(auth, new GoogleAuthProvider());
//     const provider = new GoogleAuthProvider()
//     signInWithPopup(auth, provider)
//     .then(result => {
//     console.log(result)
//     console.log('se logueo con Gmail');
//     setTimeout(function () {onNavigate('/navigation')}, 3000);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorCode + errorMessage);
//       console.log(errorCode + errorMessage)
//     });
//   }

// export const signInFacebook = () => {
//     const provider = new FacebookAuthProvider();
//     signInWithPopup(auth, provider)
//     .then(result => {
//     console.log(result)
//     console.log('se logueo con Facebook' );
//     setTimeout(function () {onNavigate('/navigation')}, 3000);
//     }) 
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorCode + errorMessage);
//       console.log(errorCode + errorMessage)
//     });
//   }

// export const signInUser = (email, password) => {
//     signInWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // alert("¡Entraste con éxito!");
//       Swal.fire({ 
//         title: '¡Hola! otra vez',
//         text: 'Ingresaste con éxito',
//         icon: 'success',
//         confirmButtonText: 'Aceptar',
//         timer: 2000
//       })
//       console.log("¡Entraste con éxito!", userCredential.user)
//       setTimeout(function () {onNavigate('/navigation')}, 2500);
//     })
//     .catch((error) => {
//     //   const errorCode = error.code;
//     //   const errorMessage = error.message;
//     //   alert(errorCode + errorMessage);
//     //   return false;
//     // });
//     Swal.fire({ 
//       title: '¡Oh no!',
//       text: 'No pudiste loguearte por el siguiente motivo: ' + error,
//       icon: 'error',
//       confirmButtonText: 'Aceptar'
//     })
//     return false;
//   });
// }
// export const createNewUser = () => {
//     const username = document.querySelector('#inp_name_user').value;
//     const realname = document.querySelector('#inp_realname').value;
//     const email = document.querySelector('#inp_email').value;
//     const password = document.querySelector('#inp_password1').value;

//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//     const user = userCredential.user;
//     setDoc(doc(db, 'users/' + user.uid),{
//         username: username,
//         realname: realname,
//         email: email,
//         password: password
//       });
//      // alert("¡Registrado! Ahora formas parte de nuestra comunidad",  userCredential.user);
//     Swal.fire({ 
//         title: '¡Genial!',
//         text: 'Ahora formas parte de nuestra comunidad Tusuy Perú',
//         icon: 'success',
//         confirmButtonText: 'Aceptar',
//         timer: 5000 
//       })
//       setTimeout(function () {onNavigate('/login')}, 5000);
//     })
//     .catch((error) => {
//         // const errorCode = error.code;
//         // const errorMessage = error.message;
//         // alert(errorCode + errorMessage);
//         Swal.fire({ 
//           title: '¡Oh no!',
//           text: 'Ocurrió el siguiente error: ' + error,
//           icon: 'error',
//           confirmButtonText: 'Aceptar'
//         })
//         return false;
//     });
// }

// export const sendEmailForgotPassword = () =>{
//       auth.languageCode = 'es';
//       const email = document.querySelector('#inp_email_forgot').value;
//       sendPasswordResetEmail(auth, email)
//       .then(() => {
//       // console.log('Enviado, revísalo!', email);
//       // alert('Enviado, revísalo!', email);
//       Swal.fire({ 
//         title: 'Correo electrónico de restablecimiento de contraseña enviado a: ',
//         text: email,
//         icon: 'success',
//         confirmButtonText: 'Aceptar',
//         timer: 5000
//         })
//       })
//       .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert (errorCode + errorMessage )
//       return false;
//       });
//     //   Swal.fire({ 
//     //     title: 'Ocurrió el siguiente error: ' ,
//     //     text: error,
//     //     icon: 'error',
//     //     confirmButtonText: 'Aceptar'
//     //   })
//     //   return false;
//     // });
// }


// export const logout = () =>{
//   signOut(auth).then(() => {
//     // Sign-out successful.
//     alert('se cerró sesión')
//   }).catch((error) => {
//     // An error happened.
//     alert(error)
//   });
  
// }