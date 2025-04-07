let pcNumber = Math.floor(Math.random() * 6) + 1;
let userNumber = Math.floor(Math.random() * 6) + 1;

console.log(pcNumber);
console.log(userNumber);

if (pcNumber == userNumber) {
  alert("Questo è un pareggio");
}
else if (pcNumber > userNumber) {
  alert("Ha vinto il pc");
}
else {
  alert("Ha vinto l'utente");
}


// while (pcNumber == userNumber) {
//   pcNumber = Math.floor(Math.random() * 7) + 1;
//   userNumber = Math.floor(Math.random() * 7) + 1;
//   console.log(pcNumber);
//   console.log(userNumber); 
//   alert("Pareggio!!")
// }

// console.log(pcNumber);
// console.log(userNumber);

// if (pcNumber > userNumber) {
//   alert("Ha vinto il pc!");
// } 
// else {
//   alert("Ha vinto l'utente!");
// }