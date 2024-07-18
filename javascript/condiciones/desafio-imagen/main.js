const imagen = document.getElementById("imagen");

function cambiarBorde() {
  if (imagen.className == "border") {
    imagen.className = "";
  } else {
    imagen.className = "border";
  }
}

imagen.addEventListener("click", cambiarBorde);
