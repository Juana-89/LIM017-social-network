export const navigation = () => {
  // document.write('probando');
  document.querySelector('.container_video').remove();
  const divPrueba = document.querySelector('main');
  const header = document.createElement('header');
  header.setAttribute('id', 'header_navigation_profile');
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
    <a href="" class="nav_a_link">Cerrar Sesión&nbsp;&nbsp;<i id="btn_logout" class="fa-solid fa-arrow-right-from-bracket"></i></a>
    </ul>
    </nav>`;

  const profile = document.createElement('section');
  profile.setAttribute('id', 'section_profile_user');

  const photo = document.createElement('aside');
  photo.setAttribute('id', 'aside_profile_user');
  photo.innerHTML = `<div class="div_aside_photo_user">
    <picture>
    <img class="img_photo_user" src="./media/foto_ejem.jpg">
    <button type="button" class="btn_edit_photo">
    <i class="fa-solid fa-camera"></i>
    </picture>`;
  const profileInfo = document.createElement('article');
  profileInfo.setAttribute('id', 'article_profile_user');
  profileInfo.innerHTML = `<div class="div_article_profile_user">
    <h2 id="h2_perfil">Perfil</h2>
    <h3 id="h3_perfil">Usuario:<br>DinaTM</h3><br>
    <h3 id="h3_perfil">Nombre:<br>Dina Talavera Mark</h3><br>
    <h3 id="h3_perfil">E-mail:<br>dinatm@gmail.com</h3>
</div>`;
  const sectionPublication = document.createElement('section');
  sectionPublication.setAttribute('id', 'section_publication');

  const publicationUser = document.createElement('div');
  publicationUser.setAttribute('id', 'div_publication_user');
  publicationUser.innerHTML = `<article class="article_publication_user">
    <h3 id="h3_publication_user">¿Qué quieres publicar?</h3>

    `;
  console.log(header);
  divPrueba.appendChild(header);
  profile.appendChild(photo);
  profile.appendChild(profileInfo);
  divPrueba.appendChild(profile);
  sectionPublication.appendChild(publicationUser);
  divPrueba.appendChild(sectionPublication);
};
