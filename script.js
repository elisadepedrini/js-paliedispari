/* 1. Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const oneWord = prompt('Enter a word', 'Ex. Cat')

// Funzione per invertire la parola
function reverseWord() {
  return oneWord.split('').reverse().join('');
};

console.log(reverseWord());
const wordReversed = reverseWord()
console.log(wordReversed);


// Funzione per verificare che la parola è palindroma 
function palindrome() {
    if (oneWord == wordReversed) {
        console.log('Your word is palindrome');
        
        
    } else {
        console.log('Your word is not palindrome');
    }
}

console.log(palindrome());



/* 2. Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


