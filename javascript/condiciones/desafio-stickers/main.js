const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const input3 = document.getElementById("input-3");
const btn = document.getElementById("btn-llevar");
const elementoMensaje = document.getElementById("dar-valor");

const mensajeBueno = "¡Muy buena eleccion!";
const mensajeMalo = "¡Excedes el maximo!";

function sumar() {
  let valor1 = Number(input1.value);
  let valor2 = Number(input2.value);
  let valor3 = Number(input3.value);
  //control

  let valorTotal = valor1 + valor2 + valor3;

  if (valorTotal > 10) {
    elementoMensaje.textContent = mensajeMalo;
  } else {
    elementoMensaje.textContent = mensajeBueno;
  }
}

btn.addEventListener("click", sumar);
