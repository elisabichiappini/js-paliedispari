//restizione linguaggio Js
'use strict';
// Palidroma
// Prompt a utente inserisci una parola;
// Funzione acquisire valore parola definendo alcuni parametri che la rendono vera o falsa; 
// dopo di chè creare un ciclo per invertire la parola e confrontare i due risultati a indici opposti.
// Condizione: la parola è palindroma? SE palindroma true ALTRIMENTI false

/*
FUNCTIONS
*/
// funzinoe controllo parola
function checkPalindromaFnz (parola) {
    // questo if può essere scritto anche su una riga if(parola.length === 0) return false;
    if(parola.length === '') {
        return false;
    }
    
    if(parola.length === 1){
        return true;
    }
    const parolaInput = parola.toLowerCase();
    let start = 0; 
    let end = parola.length - 1;

while (start < end){
    // questo if può essere scritto anche su una riga if(parola[start] !== parola[end] return false;
    if (parolaInput[start] !== parolaInput[end]) {
        return false; }
        start++;
        end--;
    }
    return true;
};

/*
OPERATIONS
*/

// input prompt per utente;
const inputUtente = prompt('Inserisci una parola');

// output
if(checkPalindromaFnz(inputUtente)) {
    alert(`la parola ${inputUtente} è palindroma`);
} else {
    alert(`la parola ${inputUtente} non è palindroma`);
}