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
    </nav>
    `;
    const photo = document.createElement('aside');
    photo.setAttribute('id', 'aside_profile_user');
    photo.innerHTML = `<div class="div_aside_photo_user">
    <picture>
    <img class="img_photo_user" src="./media/foto_ejem.jpg">
    <button type="button" class="btn_edit_photo">
    <i class="fa-solid fa-camera"></i>
    </picture>
    `;
    const profile = document.createElement('article');
    profile.setAttribute('id', 'article_profile_user');
    profile.innerHTML = `<div class="div_article_profile_user">
    <h3 id="h3_perfil">Perfil de usuario</h3>
    <h2 id="h2_perfil">Dina Talavera Mark</h2>
    <h2 id="h2_perfil">27 años</h2>
    <h2 id="h2_perfil">dinatm@gmail.com</h2>
</div>
    `;
    console.log(header)
   divPrueba.appendChild(header);
   divPrueba.appendChild(photo);
   divPrueba.appendChild(profile);
}