//restizione linguaggio Js
'use strict';

// Pari e Dispari
// Prompt a utente pari o dispari
// Prompt a utente inserisci un numero da 1 a 5
// Funzione genera numero random da 1 a 5 per computer.
// Funzione somma numeri.
// Condizione: è una somma pari o dispari? 
// SE la somma === pari && la scelta = pari |OR| la somma === dispari && la scelta === dispari, allora vince utente; 
//ALTRIMENTI vince Computer

/*
FUNCTIONS
*/
//funzione scelta pari o dispari per utente
function sceltaUtentetext(text) {
    let opzioni = ['pari', 'dispari'];
    // const scelta = prompt(text).toLowerCase();
    let scelta = '';

    do {
        scelta = prompt(text).toLowerCase();
    } while (!opzioni.includes(scelta));
 
return scelta;
}

//funzione per scelta numero per utente
function sceltaUtenteNumber(text, min, max) {
    let scelta = '';
    do {
        scelta = parseInt(prompt(text));
    } while (scelta < min || scelta > max);
    return scelta;
}

//funzione numero random per computer
function numeroRandom (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//funzione determinare se il numero è pari
function numeroPari(num) {
    return num % 2 === 0;
}

//funzione per dichiarare il vincitore
function utenteVincitore (utenteScelta, numeroPari) {
    if(utenteScelta === 'pari' && numeroPari) {
        return true;
    }
    if(utenteScelta === 'dispari' && !numeroPari) {
        return true;
    }
return false;
}

/*
OPERATIONS
*/

const utenteScelta = sceltaUtentetext('Inserisci pari o dispari');
const utenteNumero = sceltaUtenteNumber('Inserisci un numero', 0, 5);
const computerNumber = numeroRandom (0, 5);
const sommaNumeri = utenteNumero + computerNumber;
const sommaPariOppureDispari = numeroPari(sommaNumeri);
const vincitore = utenteVincitore(utenteScelta, sommaPariOppureDispari);

console.log('Hai scelto', utenteScelta);
console.log('Hai giocato il numero', utenteNumero);
console.log('Il computer gioca', computerNumber);
console.log('La somma è', sommaNumeri);
console.log(vincitore);

if(vincitore) {
    console.log('Hai vinto!') ;
} else {
    console.log('Mi spiace, ha vinto il computer');
}