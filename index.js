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
  quitarElementoActivo()
  let sections = document.getElementsByClassName("section-container");
  let max= sections.length -1;
  let nav_links = document.getElementsByClassName("nav-item")
  if (current_positon >=max){
    mostrarSeccionActiva(max)
    nav_links[max].classList.add("active")
  }else{
    current_positon = current_positon + 1
    mostrarSeccionActiva(current_positon)
    nav_links[current_positon].classList.add("active")
  }

}

function previousStep(){
  quitarElementoActivo()
  let nav_links = document.getElementsByClassName("nav-item")
  if (current_positon <= 0){
    mostrarSeccionActiva(0)
    nav_links[0].classList.add("active")
  }else{
    current_positon = current_positon - 1
    mostrarSeccionActiva(current_positon)
    nav_links[current_positon].classList.add("active")
  }

}

var current_video_position = 0

var videos = [
  '<iframe class="w-[30vw] md:w-[50vw] h-auto md:h-[70vh] " src="https://www.youtube.com/embed/OCDp7Z6fxjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  '<iframe class="w-[30vw] md:w-[50vw] h-auto md:h-[70vh] " src="https://www.youtube.com/embed/mPpWHdC1Ft8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
]

function nextVideoCarousel(){
  current_video_position += 1;
  if(current_video_position > videos.length){
    current_video_position = 0
  }
  document.getElementById("videos").innerHTML = videos[current_video_position]
}

function beforeVideoCarousel(){
  current_video_position -= 1;
  if(current_video_position < 0){
    current_video_position = 0
  }
  document.getElementById("videos").innerHTML = videos[current_video_position]
}

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("videos").innerHTML = videos[current_video_position]
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

