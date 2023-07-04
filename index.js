window.onload = function () {
  //lista general de imagenes y videos
  let IMAGENES = [
    "imagen1.png",
    "0IlUVfWThdo",
    "imagen2.png", //Sesion 2- Calendarios escolares
    "imagen3.png", //sesion 3- acerca de nosotros
    "imagen4.png",//sesion 3
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

    if (IMAGENES[posicionActual].match(/\.png/i)){ 
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
    if (IMAGENES[posicionActual].match(/\.png/i)){ 
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
    
    // 1.identificar la imagen donde hay que aplicar texto
    // 2.insertar html desde js (generar una etiqueta p y una etiqueta a que me rediriga a los enlaces)
    // p adapatar a dispositivos moviles
    // $temp_img = document.createElement("iframe");
    // $temp_img.style.width = "100%";
    // $temp_img.src = IMAGENES[posicionActual];

    $imagen.innerHTML = '';
    $imagen.appendChild($temp_img)
     // Obtener los elementos de los botones
    
}

 
  function renderizarVideo(url) {
   var link = "https://www.youtube-nocookie.com/embed/"+IMAGENES[posicionActual];
   var iframe = document.createElement('iframe');
   //iframe.class = "video"
   iframe.frameBorder=0;
   iframe.width="75%";
   iframe.height="450px";
   iframe.style="position: absolute; left: 13%; margin-top: 33px;";
   iframe.id="randomid";
   iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
   iframe.allowFullscreen;
   iframe.setAttribute("src", link);
   iframe.setAttribute("class", "video");
   $imagen.innerHTML = '';
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
  document.getElementById("inicio").addEventListener("click",()=>{
    
      posicionActual = 0;
      if (IMAGENES[posicionActual].match(/\.png/i)){ 
        renderizarImagen();
        } else { 
          renderizarVideo();
      }
     
  });

  document.getElementById("calendario").addEventListener("click",()=>{
    
    posicionActual = 2;
    if (IMAGENES[posicionActual].match(/\.png/i)){ 
      renderizarImagen();
      } else { 
        renderizarVideo();
    }
   
});

 document.getElementById("nosotros").addEventListener("click",()=>{
    
      posicionActual = 3;
      if (IMAGENES[posicionActual].match(/\.png/i)){ 
        renderizarImagen();
        } else { 
          renderizarVideo();
      }
     
  });

  document.getElementById("propuesta").addEventListener("click",()=>{
    
    posicionActual = 6;
    if (IMAGENES[posicionActual].match(/\.png/i)){ 
      renderizarImagen();
      } else { 
        renderizarVideo();
    }
   
});
  // document.getElementById("calendario").addEventListener("click",enviarAlaSeccionPorPosicion(IMAGENES,2));
  // document.getElementById("nosotros").addEventListener("click",enviarAlaSeccionPorPosicion(IMAGENES,3));
  // document.getElementById("propuesta").addEventListener("click",enviarAlaSeccionPorPosicion(IMAGENES,6));
};


