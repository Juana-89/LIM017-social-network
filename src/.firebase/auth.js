import { loginGmailFunction, loginFacebookFunction, signInUserFunction, 
    createNewUserFunction, sendEmailForgotPasswordFunction, onAuthStateChangedFunction , 
    onGetSnapshot, savePostFunction, getPost, updatePost, deletePost, logoutFunction } from '../.firebase/controllers.js';

import { onNavigate } from '../main.js'
let editStatus = false;
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
        let postContainer = document.querySelector('.article_publication_other_user');
        let postContainerEdit = document.querySelector('#text_description');
        let id = '';
        let articlePost = '';

        querySnapshot.forEach(doc => {
        const post = doc.data();
        console.log(post)
        articlePost += ` <div class="add_info_publication_users"><h5>${post.post}</h5>
        <div class="div_btns_add_info">
        <button id="btn_like" class="btns_add_like"><i class="fa-solid fa-heart"></i></button><input type="number" id="inps_like" class="inps_add_like" value="0">
        <button id="btn_delete_post" class="btns_add_info" data-id=${doc.id}>Eliminar&nbsp<i class="fa-solid fa-trash-can"></i></button>
        <button id="btn_edit_post" class="btns_add_info" data-id=${doc.id}>Editar <i class="fa-solid fa-pen-to-square"></i></button></div>
        </div>`
        })
        postContainer.innerHTML = articlePost;

        //prueba de likely
        const btnsLikePosts = postContainer.querySelectorAll('.btns_add_like');
        let inptsQuantityLikes = postContainer.querySelectorAll('.inps_add_like');
      
        btnsLikePosts.forEach((btnLike) => {
        btnLike.addEventListener('click', () => {
            let conta = 0
           
            conta++ 
        
        //console.log(inptsQuantityLikes = parseInt(inptsQuantityLikes) + 1)

          console.log(conta)
          inptsQuantityLikes += conta
     
        })
        })

        const btnsDeletePost = postContainer.querySelectorAll('#btn_delete_post');
        btnsDeletePost.forEach((btnDelete) => {
        btnDelete.addEventListener('click', (e) => {
        deletePost(e.target.dataset.id)
        Swal.fire({
        titleText: 'Eliminado',
        icon: 'success',
        timer:2000,
        timerProgressBar: true,
        toast: true,
        position: 'bottom-end',
        allowOutsideClick: false
        });
        })
    });

        const btnsEditPost = postContainer.querySelectorAll('#btn_edit_post');
        btnsEditPost.forEach((btnEdit) => {
        btnEdit.addEventListener('click', async (e) => {
        const doc = await getPost(e.target.dataset.id)
        const post = doc.data();
        console.log(post)

        postContainerEdit.value = post.post;
        editStatus = true;
        id = doc.id

        const btnAddEditPost = document.querySelector('#add_publication');
        btnAddEditPost.style.display = 'none';
        const btnEditPostMain = document.querySelector('#add_edit_publication');
        btnEditPostMain.style.display = 'block';
        btnEditPostMain.addEventListener('click', () => {
                
        if (editStatus) {
        btnEditPostMain.style.display = 'block';
        btnAddEditPost.style.display = 'none';
        console.log("cargando")
        updatePost(id, {post: postContainerEdit.value})
        Swal.fire({
        titleText: 'Editado',
        icon: 'success',
        timer:2000,
        timerProgressBar: true,
        toast: true,
        position: 'bottom-end',
        allowOutsideClick: false
        });
        btnAddEditPost.style.display = 'block'
        btnEditPostMain.style.display = 'none'

        }
        postContainerEdit.value = ''
        editStatus = false;
        });
        })
        });
        })
});

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
    setTimeout(function () {onNavigate('/')}, 2000);
        return logoutFunction()
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

// funcion para descargar la imagen del storage a la publicación
async function dowloadImage(imagePreview, image) {
  await getDownloadURL(ref(storage, `image-publication/${image}`))
    .then((url) => {
      imagePreview.setAttribute('src', url);
    }).catch((error) => {
    });
}
// funcion para subir la imagen de la publicación al storage
export async function publicationUser(image, imagePreview, logoChange) {
  let result = '';
  const publicationRef = ref(storage, `image-publication/${image.name}`);
  const upload = await uploadBytesResumable(publicationRef, image);
  function time() {
    // eslint-disable-next-line no-param-reassign
    logoChange.display = 'none';
  }
  if (upload.state === 'success') {
    setTimeout(time, 500);
  }
  result = true;
  await dowloadImage(imagePreview, image.name);
  return result;
}