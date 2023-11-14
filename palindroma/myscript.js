//restizione linguaggio Js
'use strict';

// Palidroma
// 1 - Prompt a utente inserisci una parola;
// 2 - Funzione acquisire valore parola; 
// 3 - Condizione: la parola è palindroma? SE palindroma true ALTRIMENTI false

/*
FUNCTIONS
*/
// 2 - Funzione acquisire valore parola; 
function palindrogram (parola) {
    const palindromaValidation = parola.toLowerCase();
    if (palindromaValidation === palindromaValidation.split('').reverse().join('')) {
        return true;
    }
    return false;
}

/*
OPERATIONS
*/
// 1 Prompt a utente inserisci una parola;
const inpuUtente = prompt('Inserisci una parola');

// 3 - Condizione: la parola è palindroma? SE palindroma true ALTRIMENTI false
if (palindrogram(inpuUtente) === true) {
    alert(`La parola ${inpuUtente} è palindroma.`)
} else {
    alert(`La parola ${inpuUtente} non è palindroma.`)
}