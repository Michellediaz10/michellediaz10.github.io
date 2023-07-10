function showModal(elemento) {
  let video = elemento.getAttribute("data-video")
  renderizarVideo(video)
  let modal = document.getElementById("modalVideo");
  modal.classList.remove("hidden");
}
function closeModal(elemento="modalVideo") {
  let modal = document.getElementById(elemento);
  modal.classList.add("hidden");
}
function renderizarVideo($imagen) {
  
  var bodyModal=document.getElementById("contentModal");
  bodyModal.innerHTML = "";

  var link = "https://www.youtube-nocookie.com/embed/" + $imagen;
  var iframe = document.createElement("iframe");

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
} 
