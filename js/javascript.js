function iniciarEventos(){
  // click al btn x (cerrar imagenes pandas)
  var btnCerrar = document.getElementsByClassName("cerrar");
  for(var i=0; i<btnCerrar.length;i++){
    btnCerrar[i].addEventListener("click", quitarImagen);
  }
  // click btn restaurar fotos
  var btnRestaurar = document.getElementById("restaurarBtn");
  btnRestaurar.addEventListener("click", restaurarImagenes);
}

function quitarImagen(){
  var padre = this.parentElement;
  padre.style.display="none";
}

function restaurarImagenes(){
  var imagenes= document.getElementsByClassName("contenedorImagen");
  for(var j=0; j<imagenes.length; j++){
    imagenes[j].style.display="block";
  }
}

iniciarEventos();
