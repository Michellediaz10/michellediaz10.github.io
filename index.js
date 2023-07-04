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
  let intervalo;

  // Funciones

  /**
   * Funcion que cambia la foto en la siguiente posicion
   */
  function pasarFoto() {
    if (posicionActual >= IMAGENES.length - 1) {
      posicionActual = 0;
    } else {
      posicionActual++;
    }

    if (IMAGENES[posicionActual].match(/\.png/i)) {
      renderizarImagen();
    } else {
      renderizarVideo();
    }
  }

  /**
   * Funcion que cambia la foto en la anterior posicion
   */
  function retrocederFoto() {
    if (posicionActual <= 0) {
      posicionActual = IMAGENES.length - 1;
    } else {
      posicionActual--;
    }
    if (IMAGENES[posicionActual].match(/\.png/i)) {
      renderizarImagen();
    } else {
      renderizarVideo();
    }
  }

  /**
   * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
   */
  function renderizarImagen() {
    //indentificar cuales son imagenes
    $temp_img = document.createElement("img");
    $temp_img.style.width = "100%";
    $temp_img.src = IMAGENES[posicionActual];

    $imagen.innerHTML = "";
    $imagen.appendChild($temp_img);
    if(posicionActual == 18){
      let temp_html = "<div class='position-relative'><p class='position-absolute end-0'>Conoce los requisitos para obtener el High School Diploma haciendo clic <a href='https://8656972.fs1.hubspotusercontent-na1.net/hubfs/8656972/Comunicado%20pasos%20para%20ver%20registro%20dpto%20florida/GENUINE%20REQUISITOS%20HIGH%20SCHOOL%20TF.pdf' class='oval-button px-3' target='_blank'>Aqui<a></p></div>";
      $imagen.innerHTML+=temp_html;
    }
    if(posicionActual == 26){
      let temp_html = "<div class='position-relative'><p class='position-absolute end-0'>Conoce los costos para otros países haciendo clic <a href='https://drive.google.com/file/d/1gej_OTZtckdYxYL9_ty-iVx0_39qDFv9/view' class='oval-button px-3' target='_blank'>Aqui<a></p></div><br>";
      $imagen.innerHTML+=temp_html;
      let temp_html2 = "<div class='position-relative'><p class='position-absolute end-0'>Comienza ahora tu proceso de admisión en nuestro colegio haciendo clic <a href='https://almahub.co/admisiones' class='oval-button px-3' target='_blank'>Aqui<a></p></div>";
      $imagen.innerHTML+=temp_html2;
    }
  }

  function renderizarVideo(url) {
    var link =
      "https://www.youtube-nocookie.com/embed/" + IMAGENES[posicionActual];
    var iframe = document.createElement("iframe");
    //iframe.class = "video"
    iframe.frameBorder = 0;
    iframe.width = "75%";
    iframe.height = "450px";
    iframe.style = "position: absolute; left: 13%; margin-top: 33px;";
    iframe.id = "randomid";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen;
    iframe.setAttribute("src", link);
    iframe.setAttribute("class", "video");
    $imagen.innerHTML = "";
    $imagen.appendChild(iframe);
  }
  /**
   * Activa el autoplay de la imagen
   */

  // Eventos
  $botonAvanzar.addEventListener("click", pasarFoto);
  $botonRetroceder.addEventListener("click", retrocederFoto);
  // Iniciar
  renderizarImagen();

  let nav_links = document.getElementsByClassName("nav-link");

  for (let i = 0; i < nav_links.length; i++) {
    
    nav_links[i].addEventListener("click", function (e) {
      quitarElementoActivo()
      posicionActual = nav_links[i].getAttribute('data-posicion');
      if (IMAGENES[posicionActual].match(/\.png/i)) {
        renderizarImagen();
      } else {
        renderizarVideo();
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
};
