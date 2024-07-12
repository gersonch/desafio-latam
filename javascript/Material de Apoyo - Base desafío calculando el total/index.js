const precioSpan = document.querySelector(".precio-inicial");
const cantidadCompras = document.getElementById("cantidadCompras");
const valorTotal = document.getElementById("valor-total");

let cantidad = 0;
const precio = 400000;

precioSpan.innerHTML = precio;
cantidadCompras.innerHTML = cantidad;

const operacion = () => cantidad * precio;

function sumar() {
  cantidadCompras.innerText = ++cantidad;
  valorTotal.innerText = operacion();
}

function restar() {
  cantidadCompras.innerText = --cantidad;
  valorTotal.innerText = operacion();
  if (cantidad <= 0) {
    cantidad = 0;
    valorTotal.innerHTML = "";
    cantidadCompras.innerHTML = "0";
  }
}
