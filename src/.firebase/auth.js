import { loginGmailFunction, loginFacebookFunction, signInUserFunction, 
         createNewUserFunction, sendEmailForgotPasswordFunction, onAuthStateChangedFunction , 
         onGetSnapshot, savePostFunction, deletePost, logoutFunction } from '../.firebase/controllers.js';
import { onNavigate } from '../main.js';
import { getAuth, collection, getDocs , getFirestore} from '../.firebase/index.js'
import { app } from '../.firebase/config.js';

// Usuario puede loguearse con su cuenta de Gmail
export const signInGmail = () => {
    return loginGmailFunction()
    .then(result => {
    console.log(result.user)
    console.log('se logueo con Gmail');
    setTimeout(function () {onNavigate('/wall')}, 2000);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + errorMessage);
    console.log(errorCode + errorMessage)
    });
};

// Usuario puede loguearse con su cuenta de Facebook
export const signInFacebook = () => {
    return loginFacebookFunction()
    .then(result => {
    console.log(result.user)
    console.log('se logueo con Facebook' );
    setTimeout(function () {onNavigate('/wall')}, 2000);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + errorMessage);
    console.log(errorCode + errorMessage)
    });
};

// Usuario puede loguearse si se encuentra registrado
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

// Usuario puede crear su cuenta para tener acceso a la red
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

// Usuario puede recuperar su cuenta si se olvidó la contraseña
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
}

// Usuario puede ver los post guardados en la bd en tiempo real
    window.addEventListener('DOMContentLoaded', async () => {
    onGetSnapshot((querySnapshot) => {
    let postContainer = document.querySelector('.add_info_publication_users');
    console.log(postContainer)
   
    let articlePost = '';
    querySnapshot.forEach(doc => {
        const post = doc.data();
        console.log(post)
        articlePost += `<h5>${post.post}</h5><button class="btn_delete_post" data-id=${doc.id}>Eliminar post&nbsp;
        <i class="fa-solid fa-trash-can"></i></button><button class="btn_edit_post">&nbsp&nbspEditar post&nbsp;
        <i class="fa-solid fa-pen-to-square"></i></button>`;
    })
    postContainer.innerHTML = articlePost

    const btnDeletePost = postContainer.querySelectorAll('.btn_delete_post');
    btnDeletePost.forEach(btnDelete => {
        btnDelete.addEventListener('click', (e) => {
            console.log(e.target.dataset.id)
            deletePost(e.target.dataset.id)

        })
    })

    })
});


// // // // export const onAuthState = () => {
// // // //     onAuthStateChangedFunction((state) => {
// // // //     const db = getFirestore(app);

// // // //     const auth = getAuth(app);
// // // //     const user = auth.currentUser;
// // // //     const postList = document.querySelector('.article_publication_other_user');

  

// // // //         if (user !== null) {
// // // //           getDocs(collection(db, 'posts'))
// // // //             .then((snapshot) => {
// // // //               console.log(snapshot.docs);
// // // //               configPosts(snapshot.docs);
// // // //               user.providerData.forEach((profile) => {
// // // //                 console.log(`  Name: ${profile.displayName}`);
// // // //                 console.log(`  Email: ${profile.email}`);
// // // //                 configProfile(`  Name: ${profile.displayName}`);
// // // //                 configProfile(`  Email: ${profile.email}`);
// // // //               });
// // // //             });
// // // //         } else {
// // // //           console.log('tienes que loguearte');
// // // //           configPosts([]);
// // // //           configProfile([]);
// // // //         }
      

// // // //       const configPosts = (data) => {
// // // //         if (data.length) {
// // // //           let articlePost = '';
// // // //           data.forEach((doc) => {
// // // //           const post = doc.data();
// // // //           console.log(post);
// // // //           const liPost = `
// // // //           <li class="list_group_item"><h5>${post.title}</h5><h5>${post.description}</h5></li>`;
// // // //             articlePost += liPost;
// // // //           });
// // // //           postList.innerHTML = articlePost;
// // // //         } else {
// // // //           postList.innerHTML = 'login out';
// // // //         }
// // // //       };
// // // //     })
// // // // }

// Guarda publicación del usuario activo
export const savePost = () => {
    const description = document.querySelector('#text_description').value;
    Swal.fire({
        titleText: 'Publicado en tu muro',
        icon: 'success',
        timer:2000,
        timerProgressBar: true,
        toast: true,
        position: 'bottom-end',
        allowOutsideClick: false
        });
    return savePostFunction(description)
}

// Cierra sesión del usuario activo mandándolo a la página de inicio, aun no funciona
export const logout = () => {
    return logoutFunction(auth)
    .then(() => {
    console.log('probando')
    alert('se cerró sesión')
    setTimeout(function () {onNavigate('/')}, 2000);
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