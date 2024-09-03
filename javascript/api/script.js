const $resultado = document.getElementById("resultado")
const $valorUsuario = document.getElementById("valorUsuario")
const $moneda = document.getElementById("moneda");
const URL = "https://mindicador.cl/api/"

function convertir(){
  const valorUsuario = parseFloat($valorUsuario.value)
  const tipoMoneda = $moneda.value

  if(isNaN(valorUsuario) || valorUsuario <= 0){
    alert("ingrese un valor valido");
    return
  }
  fetch(URL)
  .then(res => res.json())
  .then(data => {
    let valorMoneda; 
    if (tipoMoneda === "dolar"){
      valorMoneda = data.dolar.valor
    } else if (tipoMoneda === "euro") {
      valorMoneda = data.euro.valor
    }
    let simbolo = tipoMoneda === "dolar" ? "$" : "€"
    $resultado.innerHTML = `El resultado es: ${(valorUsuario / valorMoneda).toFixed(2)} ${simbolo}` 

    

  })
  .catch(error => console.error('Error:', error));

}



