window.onload = function () {
  //lista general de imagenes y videos
  let IMAGENES = [
    "imagen1.png",
    "0IlUVfWThdo",
    "imagen2.png", //Sesion 2- Calendarios escolares
    "imagen3.png", //sesion 3- acerca de nosotros
    "imagen4.png", //sesion 3
    "r0HVCFzrJnU",
    "imagen5.png", //sesion 6 - nuestra propuesta pedagogica
    "imagen6.png",
    "imagen7.png",
    "imagen8.png",
    "YPl9Dd-w1ms",
    "imagen9.png",
    "YrFqSse3MK4",
    "imagen10.png",
    "imagen11.png",
    "imagen12.png",
    "imagen13.png",
    "imagen14.png",
    "imagen15.png",
    "Ulie_WVTX-s",
    "imagen16.png",
    "imagen17.png",
    "genuine.png",
    "imagen18.png",
    "OCDp7Z6fxjA",
    "mPpWHdC1Ft8",
    "imagen19.png",
    "imagen20.png",
    "imagen21.png",
  ];
  var posicionActual = 0;
  let $botonRetroceder = document.querySelector("#retroceder");
  let $botonAvanzar = document.querySelector("#avanzar");
  let $imagen = document.querySelector("#imagen");
  let $imagen2 = document.querySelector("#imagen2");
  let current_img = 1;
  // Funciones

  /**
   * Funcion que cambia la foto en la siguiente posicion
   */
  function pasarFoto() {
    
    if (window.innerWidth < 1000) {
      if (posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
        current_img = 1;
      } else {
        posicionActual= posicionActual+2;
        current_img= current_img+2;
      }
      renderizarImagenPrincipal(posicionActual);
      renderizarImagenPrincipal(current_img,$imagen2);
    }else{
      if (posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
        current_img = 1;
      } else {
        posicionActual= posicionActual+1;
      }
      renderizarImagenPrincipal(posicionActual);
    }
      actualizarMenu(posicionActual +1);
  }

  /**
   * Funcion que cambia la foto en la anterior posicion
   */
  function retrocederFoto() {
    
    if (window.innerWidth < 1000) {
      if (posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
        current_img = IMAGENES.length - 2;
      } else {
        posicionActual=posicionActual-2;
        current_img=current_img-2;
      }
      renderizarImagenPrincipal(posicionActual);
      renderizarImagenPrincipal(current_img,$imagen2);
    }else{
      if (posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
      } else {
        posicionActual=posicionActual-1;
      }
      renderizarImagenPrincipal(posicionActual);
    }
    actualizarMenu(posicionActual +1);
  }

  /**
   * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
   */
  function renderizarImagen($posicion, $imagen) {
    //indentificar cuales son imagenes
    $temp_img = document.createElement("img");
    $temp_img.style.width = "100%";
    $temp_img.src = IMAGENES[$posicion];

    $imagen.innerHTML = "";
    $imagen.appendChild($temp_img);
    if($posicion == 18){
      let temp_html = "<div class='position-relative'><p>Conoce los requisitos para obtener el High School Diploma haciendo clic <a href='https://8656972.fs1.hubspotusercontent-na1.net/hubfs/8656972/Comunicado%20pasos%20para%20ver%20registro%20dpto%20florida/GENUINE%20REQUISITOS%20HIGH%20SCHOOL%20TF.pdf' class='oval-button px-3' target='_blank'>Aqui<a></p></div>";
      $imagen.innerHTML+=temp_html;
    }
    if($posicion == 26){
      let temp_html = "<div class='position-relative'><p>Conoce los costos para otros países haciendo clic <a href='https://drive.google.com/file/d/1gej_OTZtckdYxYL9_ty-iVx0_39qDFv9/view' class='oval-button px-3' target='_blank'>Aqui<a></p></div><br>";
      $imagen.innerHTML+=temp_html;
      let temp_html2 = "<div class='position-relative'><p>Comienza ahora tu proceso de admisión en nuestro colegio haciendo clic <a href='https://almahub.co/admisiones' class='oval-button px-3' target='_blank'>Aqui<a></p></div>";
      $imagen.innerHTML+=temp_html2;
    }
  }

  function renderizarImagenPrincipal(
    $posicion, 
    imagen = $imagen
  ) {
    if (IMAGENES[$posicion].match(/\.png/i)) {
      renderizarImagen($posicion, imagen);
    } else {
      renderizarVideo($posicion, imagen);
    }
  }

  function renderizarVideo($posicion, $imagen) {
    $imagen.innerHTML = "";
    var link =
      "https://www.youtube-nocookie.com/embed/" + IMAGENES[$posicion];
    var iframe = document.createElement("iframe");
    //iframe.class = "video"
    iframe.frameBorder = 0;
    iframe.width = "75%";
    iframe.height = "450px";
    iframe.style = "position: relative; left: 13%; margin-top: 33px;";
    iframe.id = "randomid";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true; 
    iframe.setAttribute("src", link);
    iframe.setAttribute("class", "video");
    
    $imagen.appendChild(iframe);
  }
  /**
   * Activa el autoplay de la imagen
   */

  // Eventos
  $botonAvanzar.addEventListener("click", pasarFoto);
  $botonRetroceder.addEventListener("click", retrocederFoto);
  // Iniciar
  if (window.innerWidth < 1000) {
    renderizarImagenPrincipal(posicionActual);
    renderizarImagenPrincipal(current_img,$imagen2);
  }else{
    renderizarImagenPrincipal(posicionActual);
  }


  let nav_links = document.getElementsByClassName("nav-link");

  for (let i = 0; i < nav_links.length; i++) {
    
    nav_links[i].addEventListener("click", function (e) {
      quitarElementoActivo()
      posicionActual = nav_links[i].getAttribute('data-posicion');
      if (window.innerWidth < 1000) {
        renderizarImagenPrincipal(posicionActual);
        renderizarImagenPrincipal(current_img,$imagen2);
      }else{
        renderizarImagenPrincipal(posicionActual);
      }
      nav_links[i].classList.add("active")
    });
  }

  function quitarElementoActivo(){
    let nav_links = document.getElementsByClassName("nav-link");
    for (let i = 0; i < nav_links.length; i++) {
      nav_links[i].classList.remove("active")
    }
  }
  function actualizarMenu(posicionActual){
   quitarElementoActivo()
   for (let i = 0; i < nav_links.length; i++) {
    if (posicionActual == i){
      nav_links[i].classList.add("active")
    }
    
  }
  }
};
