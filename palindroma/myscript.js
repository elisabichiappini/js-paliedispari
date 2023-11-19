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
    if(parola.length === '') {
        return false;
    // questo if può essere scritto anche su una riga if(parola.length === 0) return false;
    }

    if(parola.length === 1){
        return true;
    }

    //qui abbiamo la parola iniziale resa tutta minuscola da confrontare con la parola invertita
    const parolaInputMinuscolizzata = parola.toLowerCase();

    let parolaTrasformataInvertita = '';
    //la parola invertita da confrontare con quella inziale
    for (let i = parolaInputMinuscolizzata.length - 1; i >= 0; i--) {
        parolaTrasformataInvertita += parolaInputMinuscolizzata[i];
    }
    //console.log(parolaTrasformataInvertita); // oiac

    if (parolaInputMinuscolizzata === parolaTrasformataInvertita){
        return true;
    } else {
    return false;
    }
}
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