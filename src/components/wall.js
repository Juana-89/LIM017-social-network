/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */

import { savePost, logout } from '../.firebase/auth.js';
import { getAuth, getFirestore, onAuthStateChanged, getStorage, ref } from '../.firebase/index.js';
import { app } from '../.firebase/config.js';

export const wall = () => {
  // document.write('probando');
  document.querySelector('.container_video').remove();
  const divWall = document.querySelector('main');
 
  const header = document.createElement('header');
  header.setAttribute('id', 'header_navigation');
  header.innerHTML = `<div class="logo">
    <!--img de flaticon-->
    <img class="header_img" src="./media/logo.png" />
    <h2 class="name_logo">Tusuy Perú</h2>
    </div>
    <nav>
    <input type="checkbox" id="check">
    <label for="check" class="btn-bar">
    <i class="fa-solid fa-align-justify"></i>
    </label>
    <ul class="nav_ul_link">
    <a href="" class="nav_a_link">Perfil</a>  
    <a href="" class="nav_a_link">Historias de danzas</a> 
    <a href="" class="nav_a_link">Agenda de concursos</a> 
    <a href="" class="nav_a_link">Elencos de baile</a>  
    <a href="" class="nav_a_link">Cerrar Sesión&nbsp;&nbsp;<i id="btn_logout" class="fa-solid fa-arrow-right-from-bracket"></i></a></li>
    </ul></nav>
    
    <div class="header_navigation_profile">
    <div class="logo">
    <!--img de flaticon-->
    <img class="header_img" src="./media/logo.png" />
    <h2 class="name_logo">Tusuy Perú</h2>
    </div>
    </div>`;

  const cover = document.createElement('div');
  cover.setAttribute('id', 'div_cover');
  cover.innerHTML = `<input type="file" id="file_cover" name="file" >
    <button class="btn_edit_cover">
    <i class="fa-solid fa-camera-retro"></i>Editar foto de portada</button>
    `;

  const profile = document.createElement('section');
  profile.setAttribute('id', 'section_profile_user');

  const photo = document.createElement('aside');
  photo.setAttribute('id', 'aside_profile_user');
  photo.innerHTML = `<div class="div_aside_photo_user">
    <picture>
    <img class="img_photo_user" src="./media/foto_ejem.jpg">
    <input type="file" id="file_photo" name="file_photo" >
    <button type="button" class="btn_edit_photo">
    <i class="fa-solid fa-camera"></i>
    </picture>`;

  const profileInfo = document.createElement('article');
  profileInfo.setAttribute('id', 'article_profile_user');
  profileInfo.innerHTML = `<div class="div_article_profile_user">
    <h2 id="h2_perfil">Datos del usuario</h2><br>
    <h3 id="h3_perfil"><i class="fa-solid fa-user"></i>&nbsp;Usuario: <span id="span_nom_id" class="span_perfile_user"></span></h3><br>
    <h3 id="h3_perfil"><i class="fa-solid fa-heart"></i>&nbsp;Nombre: <span id="span_nom_user" class="span_perfile_user"></span></h3><br>
    <h3 id="h3_perfil"><i class="fa-solid fa-at"></i>&nbsp;E-mail: <span id="span_email_user" class="span_perfile_user"></span></h3>
    </div>`;

  const sectionPublication = document.createElement('section');
  sectionPublication.setAttribute('id', 'section_publication');

  // publicaciones que quiere hacer el propio usuario
  const publicationUser = document.createElement('div');
  publicationUser.setAttribute('id', 'div_publication_user');
  publicationUser.innerHTML = `<article class="article_publication_user">
 
    <h3 id="h3_publication_user">¿Qué quieres publicar?</h3>
    <textarea id="text_description" rows="3" placeholder="Escribe la descripción"></textarea>  
    
    <div id="add_image_post" border ="2" ></div>
    
    <div class="add_info_publication">
    <div id="add_photo_publication" class="add_info">
    <input type="file" id="file_photo_publication" name="file_photo_publication">
    <i class="fa-solid fa-image"></i>&nbsp;&nbsp;Agregar Foto</div>&nbsp;&nbsp;

    <div id="add_publication" class="add_info">
    <i class="fa-solid fa-bullhorn"></i>&nbsp;&nbsp;Publicar</div>

    <div id="add_edit_publication" class="add_info">
    <i class="fa-solid fa-user-pen"></i>&nbsp;&nbsp;Editar</div>
    </div>
    </div>
    `;

  const publicationOtherUser = document.createElement('div');
  publicationOtherUser.setAttribute('id', 'div_publication_other_user');
  publicationOtherUser.innerHTML = '<div class="article_publication_other_user"></div>';

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = '©Red social - Tusuy Perú | Hecho por Juana Llanje para Laboratoria LIM017';
  // <img class="img_footer" src="./media/logo.png" />

  divWall.appendChild(header);
  divWall.appendChild(cover);
  divWall.appendChild(photo);
  divWall.appendChild(profileInfo);
  divWall.appendChild(profile);
  divWall.appendChild(publicationUser);
  divWall.appendChild(publicationOtherUser);
  divWall.appendChild(sectionPublication);
  divWall.appendChild(footer);

  const auth = getAuth(app);
  const user = auth.currentUser;
  // inicio sesión
  onAuthStateChanged(auth, () => {
    if (user !== null) {
      // muestra los datos del usuario ingresado
      user.providerData.forEach((profile) => {
        console.log(`Sign-in provider: ${profile.providerId}`);
        console.log(`  Provider-specific UID: ${profile.uid}`);
        console.log(`  Name: ${profile.displayName}`);
        console.log(`  Email: ${profile.email}`);
        console.log(`  Photo URL: ${profile.photoURL}`);
        document.querySelector('#span_nom_id').innerHTML += (`${profile.uid}`);
        document.querySelector('#span_nom_user').innerHTML += (`${profile.displayName}`);
        document.querySelector('#span_email_user').innerHTML += (`${profile.email}`);
      });

      console.log('juanaaaaaaaaaaaa');
    } else {
      // User is signed out
      // ...
      console.log('nooooooooooooooo');
    }
  });
  // //muestra si la bd tiene datos almacenados
  //   getDocs(collection(db, 'posts'))
  //   .then((snapshot) => {
  //     console.log(snapshot.docs);
  //   })

  // // ver el perfil del usuario logueado pero no funciona
  // // const profileList = document.querySelector('.div_article_profile_user');
  // // const configProfile = (data) => {
  // //   if (data) {
  // //     let articleProfile = '';
  // //     data.forEach((doc) => {
  // //       const profile = doc.data();
  // //       console.log(profile);
  // //       const liProfile = `
  // //       <h3 class="h3_perfil">${profile.displayName}</h3>
  // //       <h3 class="h3_perfil">${profile.email}</h3>`;
  // //       articleProfile += liProfile;
  // //     });
  // //     profileList.innerHTML = articleProfile;
  // //   } else {
  // //     profileList.innerHTML = 'login out';
  // //   }
  // // };

  // // usuario tiene que estar logueado para acceder a la vista de los posts
  // onAuthStateChanged(auth, (nom) => {
  //   if (user !== null) {
  //     getDocs(collection(db, 'posts'))
  //       .then((snapshot) => {
  //         console.log(snapshot.docs);
  //         configPosts(snapshot.docs);
  //         user.providerData.forEach((profile) => {
  //           console.log(`  Name: ${profile.displayName}`);
  //           console.log(`  Email: ${profile.email}`);
  //           // // configProfile(`  Name: ${profile.displayName}`);
  //           // // configProfile(`  Email: ${profile.email}`);
  //         });
  //       });
  //   } else {
  //     console.log('tienes que loguearte');
  //     configPosts([]);
  //     //configProfile([]);
  //   }
  // });

  divWall.querySelector('.btn_edit_cover').addEventListener('click', () => {
    document.getElementById('file_cover').click();
  });

  divWall.querySelector('.btn_edit_photo').addEventListener('click', () => {
    document.getElementById('file_photo').click();
  });

  divWall.querySelector('#add_photo_publication').addEventListener('change', () => {
    document.getElementById('file_photo_publication').click();
    // function uploadImagePost() {
    //   const storage = getStorage().ref();
    //   const fileImage = document.querySelector('#file_photo_publication').files[0];
    //   console.log(storage, fileImage);
    // }

    const divLoadImage = document.querySelector('#add_image_post')
    console.log(divLoadImage)

  });
  divWall.querySelector('#add_publication').addEventListener('click', () => {
    savePost();
    divWall.querySelector('#text_description').value = '';
  });

  divWall.querySelector('#btn_logout').addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });
  return divWall;
};
