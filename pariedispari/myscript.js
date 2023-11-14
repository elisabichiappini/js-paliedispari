//restizione linguaggio Js
'use strict';

// Pari e Dispari
// 1 - Prompt a utente pari o dispari
// 2 - Prompt a utente inserisce un numero da 1 a 5
// 3 - Funzione genera numero random da 1 a 5 per computer.
// 4 - Funzione somma numeri.
// 5 - Condizione: è una somma pari o dispari? SE la somma = pari && la scelta = pari |OR| la somma è dispari e la scelta è dispari allora vince utente*; ALTRIMENTI vince Computer

/*
FUNCTIONS
*/

// 3a
function inputComputer (min, max) {
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}

// 4a
function sommaNumeri (input1, input2) {
    const sommaNumeri = input1 + input2;
    return sommaNumeri;
}

/*
OPERATIONS
*/

// 1
const pariDispari = prompt('Scegli pari o dispari').toLowerCase();
if (pariDispari !== 'pari' && pariDispari !== 'dispari') {
    alert('Devi scrivere pari o dispari');
    pariDispari = prompt('Scegli pari o dispari').toLowerCase();
    } else {
    console.log('Hai scelto di giocare', pariDispari);
}

// 2
const inputNumeroUtente = Number(prompt('Inserisci un numero da 0 a 5'));
console.log('Il numero che hai scelto è: ', inputNumeroUtente);

// 3b
const inputNumeroComputer = inputComputer(0, 5);
console.log('Il numero del computer è: ', inputNumeroComputer);

// 4b
const sommaNumeriPresa = sommaNumeri();
console.log(sommaNumeri(inputNumeroComputer, inputNumeroUtente))

// 5
if ((sommaNumeriPresa % 2 === 0 && pariDispari === 'pari') || (sommaNumeriPresa % 2 !== 0 && pariDispari === 'dispari')) {
    console.log('hai vinto');
} else {
    console.log('non hai vinto');
}