function iniciarEventos(){
  // click al btn x (cerrar imagenes de pandas)
  var btnCerrar = document.getElementsByClassName("cerrar");
  for(var i  = 0; i < btnCerrar.length; i++){
    btnCerrar[i].addEventListener("click", quitarImagen);
  }
  // click btn restaurar fotos
  var btnRestaurar = document.getElementById("restaurarBtn");
  btnRestaurar.addEventListener("click", restaurarImagenes);
  //click btn origen
  var btnOrigen = document.getElementById("btnOrigen");
  btnOrigen.addEventListener("click", mostrarOcultarOrigen);
  //click btn extincion
  var btnExtincion = document.getElementById("btnExtincion");
  btnExtincion.addEventListener("click", mostrarOcultarExtincion);
}

function quitarImagen(){
  var padre = this.parentElement;
  padre.style.display="none";
}

function restaurarImagenes(){
  var imagenes= document.getElementsByClassName("contenedorImagen");
  for(var j=0; j<imagenes.length; j++){
    imagenes[j].style.display = "block";
  }
}

function mostrarOcultarOrigen(){
  var txtOrigen = document.getElementById("origen");
  if (txtOrigen.style.visibility === "hidden"){
    txtOrigen.style.visibility = "visible";
  }else{
    txtOrigen.style.visibility = "hidden";
  }
}

function mostrarOcultarExtincion(){
  var txtExtincion = document.getElementById("extincion");
  if (txtExtincion.style.visibility === "hidden"){
    txtExtincion.style.visibility = "visible";
  }else{
    txtExtincion.style.visibility = "hidden";
  }
}

iniciarEventos();
