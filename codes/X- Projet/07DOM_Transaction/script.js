var transactions = [];

// UI DOM ref
// Left side
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const nameIcon = document.getElementById("nameIcon");
const amountIcon = document.getElementById("amountIcon");
// Right side
const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");

function createTransaction(name, amount) {
  return new Transaction(name, amount);
}

function addTransaction(e) {
  // preventDefault to prevent the default form action for Ajax form submissions
  e.preventDefault();

  // handle styling
  if (nameInput.value.trim() === "") {
    handleInputStyling(true, nameInput, nameIcon);
  } else {
    handleInputStyling(false, nameInput, nameIcon);
  }

  if (amountInput.value.trim() === "") {
    handleInputStyling(true, amountInput, amountIcon);
  } else {
    handleInputStyling(false, amountInput, amountIcon);
  }

  // On valide si tous est bien
  if (amountInput.value.trim() !== "" && nameInput.value.trim() !== "") {
    var transaction = createTransaction(nameInput.value, amountInput.value);
    transactions.push(transaction);

    // add transaction to UI in history lint
    addTransactionToHistory(transaction);

    // update amount in UI
    updateValues();

    // clear inputs
    nameInput.value = "";
    amountInput.value = "";
  }
}

// Add transactions to DOM list
function addTransactionToHistory(transaction) {
  // Get sign
  const sign = transaction.getAmount() < 0 ? "-" : "+";
  /**
   * TODO algorithm:
   *  1-Create a new Element in the document
   *  2-Add a CSS class based on the value (plus or minus)
   *  3-Create a new span element that displays the transaction info
   *  4-Append the document with a new child node
   *  */ 
  //const item = document.  TODO
  item.classList.add(transaction.getAmount() < 0 ? "minus" : "plus");
  item.innerHTML = `
     ${transaction.getName()} <span>${sign}${Math.abs(transaction.getAmount())}</span>
  `;
  // list.    TODO
}

// Update the balance, income and expense
function updateValues() {
  const amounts = getAmountsArray(transactions);
  const total = getTotal(amounts);
  const income = getIncome(amounts);
  const expense = getExpense(amounts);
  balance.innerText = "€" + total;
  money_plus.innerText = "€" + income;
  money_minus.innerText = "€" + expense;
}

form.addEventListener("submit", addTransaction);
