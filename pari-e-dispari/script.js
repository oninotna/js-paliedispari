// funzione per generare numero random
function sortPcRandomNumber(max, min = 1) {
  const pcRandomNumber = Math.floor(Math.random() * (max - min) + (min + 1));
  return pcRandomNumber;
}

// funzione per effettuare la somma tra i due numeri
function sumNumbers(firstNumber, secondNumber) {
  const sum = firstNumber + secondNumber;
  return sum;
}

// funzione per verificare se un numero è pari o dispari
function evenOrOdd(firstNumber, secondNumber) {
  const sum = firstNumber + secondNumber;
  let sumEven = sum % 2 === 0 ? true : false;
  return sumEven;
}

// scelta dell' utente tra pari e dispari con controllo effettivo dell'inserimento
let userChoice = prompt("scegli tra pari o dispari: ");

while (!isNaN(userChoice) || userChoice !== "pari" && userChoice !== "dispari") {
  userChoice = prompt("scegli tra pari o dispari: ");
}

// scelta del numero da parte dell'utente
let userNumber = parseInt(prompt("scegli un numero da 1 a 5"));

while (userNumber > 5 || userNumber < 1 || isNaN(userNumber)) {
  userNumber = parseInt(prompt("scegli un numero da 1 a 5"));
}

// richiamo funzione per generare numero random
const pcRandomNumber = sortPcRandomNumber(5);

console.log("Il numero estratto per il pc è: " + pcRandomNumber);
console.log("Il numero scelto dall'utente è: " + userNumber);
console.log("Tra pari e dispari l'utente ha scelto: " + userChoice);
console.log("La somma dei due mumeri è: " + sumNumbers(pcRandomNumber, userNumber));
evenOrOdd(pcRandomNumber, userNumber);
console.log(evenOrOdd() === true && userChoice === "pari" ? "La somma é pari, ha vinto l'utente"
: evenOrOdd() === false && userChoice === "dispari" ? "La somma è dispari, ha vinto l'utente"
: evenOrOdd() === true && userChoice === "dispari" ? "La somma è pari, ha vinto il pc"
:  "La somma è dispari, ha vinto il pc");