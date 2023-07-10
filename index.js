var current_positon = 0;
function showModal(elemento) {
  let video = elemento.getAttribute("data-video")
  renderizarVideo(video)
  let modal = document.getElementById("modalVideo");
  modal.classList.remove("hidden");
}
function closeModal() {
  let modal = document.getElementById("modalVideo");
  modal.classList.add("hidden");
}
function renderizarVideo($imagen) {
  
  var bodyModal=document.getElementById("contentModal");
  bodyModal.innerHTML = "";

  var link = "https://www.youtube.com/embed/" + $imagen;
  var iframe = document.createElement("iframe");
  console.log(link);
  //iframe.class = "video"

  iframe.frameBorder = 0;
  iframe.width = "75%";
  iframe.height = "450px";
  iframe.style = "position: relative; left: 13%; margin-top: 33px;";
  iframe.id = "randomid";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.setAttribute("src", link);
  iframe.setAttribute("class", "video");
  bodyModal.appendChild(iframe);
}
function closeMenu(){
  let menu = document.getElementById("menu")
  menu.style.display = "none"

  document.getElementById("menu-inicial").style.display = "flex"
  document.getElementById("sliders").style.display = "flex"
}

function showMenu(){
  let menu = document.getElementById("menu")
  menu.style.display = "block"
  document.getElementById("menu-inicial").style.display = "none"
  document.getElementById("sliders").style.display = "none"
}
function quitarElementoActivo(){
  let nav_links = document.getElementsByClassName("nav-item");
  for (let i = 0; i < nav_links.length; i++) {
    nav_links[i].classList.remove("active")
  }
}

function mostrarSeccionActiva(current_positon){
  let sections = document.getElementsByClassName("section-container");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.add("hidden")

    if(current_positon == i) {
      sections[i].classList.remove("hidden")
    }
  }
}


function nextStep(){
  let sections = document.getElementsByClassName("section-container");
  let max= sections.length -1;
  if (current_positon >=max){
    mostrarSeccionActiva(max)
  }else{
    current_positon = current_positon + 1
    mostrarSeccionActiva(current_positon)
  }

}

function previousStep(){
  if (current_positon <= 0){
    mostrarSeccionActiva(0)
  }else{
    current_positon = current_positon - 1
    mostrarSeccionActiva(current_positon)
  }

}

document.addEventListener("DOMContentLoaded",function(){
    if (window.innerWidth > 900 ) {
      mostrarSeccionActiva(0)
    }

    let nav_links = document.getElementsByClassName("nav-item")
    for (let i = 0; i < nav_links.length; i++) {
      
        nav_links[i].addEventListener("click", function (e) {
          quitarElementoActivo()
          current_positon = i;
          //posicionActual = nav_links[i].getAttribute('data-posicion');
          nav_links[i].classList.add("active")
          if (window.innerWidth > 900 ) {
            mostrarSeccionActiva(current_positon)
          }

        });
     
    }

})

