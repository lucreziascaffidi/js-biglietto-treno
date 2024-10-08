console.log('Hello world!')

// Inizializzo la variabile relativa ai KM che l'utente deve percorrere per il viaggio
// le assegno il numero che l'utente inserisce nel prompt in cui appare la domanda "Quanti km devi percorrere?"
const userPromptKM = prompt('Quanti km devi percorrere?');

// trasformo il risultato stringa in numero
const toTravelKM = parseFloat(userKM);

// stampo il numero di KM che deve percorrere l'utente
console.log(`L'utente deve percorrere ${toTravelKM} KM.`);

// Inizializzo la variabile relativa all'età dell'utente che deve fare il viaggio
// le assegno il numero che l'utente inserisce nel prompt in cui appare la domanda "Quanti anni hai?"
const userPromptAge = prompt('Quanti anni hai?');

// trasformo il risultato stringa in numero
const userAge = parseInt(userPromptAge)

// stampo il numero età che inserisce l'utente
console.log(`L'utente ha ${userAge} anni.`);

// Inizializzo la variabile relativa al prezzo del biglietto per 1 Km
// e le assegno il numero 0.21 considerando che il costo è di 0.21€ per 1 km. 

const oneTicketPrice = 0.21;

// Inizializzo la variabile relativa al costo dell'interno biglietto
// moltiplicando 0.21 per i KM indicati dall'utente nella prima domanda e associati alla variabile del punto 1.

const ticketPrice = (oneTicketPrice * toTravelKM);

// Inizializzo la variabile dell'età inferiore ai 18 anni

const under18 = (userAge < 18);

// Inizializzo la variabile del costo del bigletto scontato del 20% per l'età è inferiore ai 18 anni. 

const ticketPriceUnder18 = (ticketPrice * 20) / 100;

//Inizializzo la variabile dell'età maggiore di 65 anni

const over65 = (userAge > 65);

// Inizializzo la variabile del costo del bigletto scontato del 40% per l'età maggiore di 65 anni. 

const ticketPriceOver65 = (ticketPrice * 40) / 100;

//Istruzioni condizionali: 

// se l'età è inferiore ai 18 anni 
if (under18) {

    // allora il costo del biglietto è scontato del 20% quindi faccio apparire questa frase
    console.log(`Il costo totale del biglietto è di ${ticketPriceUnder18.toFixed(2)}€. Scontato del 20% per i minorenni.`)

    //altrimenti se l'età è maggiore di 65 anni  
} else if (over65) {

    // allora il costo del biglietto è scontato del 40% e faccio apparire questa frase
    console.log(`Il costo totale del biglietto è di ${ticketPriceOver65.toFixed(2)}€. Scontato del 40% per gli over 65.`)

    // altrimenti l'età è sicuramente compresa tra i 18 e i 65 anni
} else {

    // allora l'utente non ha diritto a nessuno sconto e faccio apparire questa frase
    console.log(`Il costo totale del biglietto è di ${ticketPrice.toFixed(2)}€. L'utente non ha diritto a nessuno sconto.`)

}







