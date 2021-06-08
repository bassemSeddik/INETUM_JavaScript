let form = document.getElementById("form");
let paysChoisis = document.getElementById("pays");



// Init app
function verifierPays(e) {
  e.preventDefault();

  if (paysChoisis.value == "Selectionnez") {
    alert("Merci de choisir un pays");
  } 
}

form.addEventListener("submit", verifierPays);
