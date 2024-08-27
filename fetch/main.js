document.getElementById("button").addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const resultDiv = document.querySelector(".div");

  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch("https://api.boostr.cl/isapres.json", options)
    .then((response) => response.json())
    .then((data) => {
      let item = data.data.find(
        (item) =>
          item.code === input || item.name.toLowerCase() === input.toLowerCase()
      );
      if (item) {
        resultDiv.innerHTML = `
            <span>Nombre: ${item.name} </span>
        `;
      }
    })
    .catch((err) => console.error(err));
});
