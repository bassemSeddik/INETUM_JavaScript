
/** Debut des création du tableaux pour toutes les transactions */
var toutesNosTransactions = [];

/** Définition de constantes qui pourront référencer nos DOM Elements  */
const form = document.getElementById("formulaire");
const nomTransactionInput = document.getElementById("nomTransaction");
const valeurTransactionInput = document.getElementById("valeurTransaction");
const nomTransactionIcone = document.getElementById("nomTransactionIcone");
const valeurTransactionIcone = document.getElementById("valeurTransactionIcone");

/** Fonction pour la CREATION d'une nouvelle transaction toute fraiche */
function creerTransaction(name, amount) {
  return new Transaction(name, amount);
}

/** Ici, on va tenter une mise en forme CSS conditionnelle selon nos input (Vides|Remplis) */
function ajouterTransaction(event) {
  // preventDefault to prevent the default form action
  event.preventDefault();

  // dynamic styling by situation
  // pour nom
  if (nomTransactionInput.value.trim() === "") { //trim() supprime les espaces au alentours du texte
    handleInputStyling(true, nomTransactionInput, nomTransactionIcone);
  } else {
    handleInputStyling(false, nomTransactionInput, nomTransactionIcone);
  }
  // pour valeur
  if (valeurTransactionInput.value.trim() === "") {
    handleInputStyling(true, valeurTransactionInput, valeurTransactionIcone);
  } else {
    handleInputStyling(false, valeurTransactionInput, valeurTransactionIcone);
  }

  // On valide si tous est bien
  if (valeurTransactionInput.value.trim() !== "" && nomTransactionInput.value.trim() !== "") {
    var transaction = creerTransaction(nomTransactionInput.value, valeurTransactionInput.value);
    toutesNosTransactions.push(transaction);
    console.log(toutesNosTransactions);

    // clear inputs
    nomTransactionInput.value = "";
    valeurTransactionInput.value = "";
  }
}

/** Voici ce qui permettrait de lier notre formulaire "SUBMIT" à notre fonction */
form.addEventListener("submit", ajouterTransaction);
