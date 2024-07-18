const select1 = document.getElementById("select-1");
const select2 = document.getElementById("select-2");
const select3 = document.getElementById("select-3");
const msj = document.getElementById("msj");
const btnIngresar = document.getElementById("btn");

let mensajeBueno = "Contraseña Correcta";
let mensajeMalo = "Contraseña Incorrecta. Intenta otra vez";

btnIngresar.addEventListener("click", () => {
  if (select1.value == 9 && select2.value == 1 && select3.value == 1) {
    msj.textContent = mensajeBueno;
  } else if (select1.value == 7 && select2.value == 1 && select3.value == 4) {
    msj.textContent = mensajeBueno;
  } else {
    msj.textContent = mensajeMalo;
  }
});
