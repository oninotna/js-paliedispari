const userWord = prompt("Inserisci una parola");
let newWord = "";

function isPalindromicWord() {
  let isPalindrome = false;
  for (let i = userWord.length -1; i >= 0; i--) {
    newWord = newWord + userWord[i];
  }
  if (newWord === userWord) {
    isPalindrome = true;
  }
  
  return isPalindrome;
}


console.log("La parola inserita dall'utente è: " + userWord);
console.log("La parola è palindroma: " + isPalindromicWord());
