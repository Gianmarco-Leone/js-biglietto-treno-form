// TRACCIA:
//
// Scrivere un programma che chieda all'utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km)
// Va applicato uno sconto del 20 % per i minorenni
// Va applicato uno sconto del 40 % per gli over 65.


// SVOLGIMENTO
let outputMessage;
const pricePerKm = 0.21;


// CHIEDERE ALL'UTENTE NUMERO KM
let userKm;
// console.log("I chilometri da percorrere sono " + userKm);

const calculationButton = document.getElementById("calculation_button");

calculationButton.addEventListener(
    "click",
    function () {
        userKm = document.getElementsByClassName("user-km").value;
    }
);

console.log(userKm);




// CHIEDERE ALL'UTENTE ETA'
// const userAge = parseInt(prompt("Quanti anni hai?"));
// console.log("L'età dell'utente è " + userAge);


// if (!isNaN(userAge) && !isNaN(userKm)) {
//     // PREZZO BIGLIETTO CALCOLATO IN BASE AI KM
//     let price = userKm * pricePerKm;
//     // console.log("Il prezzo del biglietto è € " + price);


//     // APPLICARE SCONTO UNDER 18
//     if (userAge < 18) {

//         // CREAZIONE SCONTO UNDER 18
//         const smallDiscountValue = (price * 20) / 100;
//         price = price - smallDiscountValue;
//         price = price.toFixed(2);

//         outputMessage = `Il prezzo scontato per gli under 18 è € ${price}`
//         console.log(outputMessage);

//     }

//     // APPLICARE SCONTO OVER 65
//     else if (userAge > 65) {

//         // CREAZIONE SCONTO OVER 65
//         const bigDiscountValue = (price * 40) / 100;
//         price = price - bigDiscountValue;
//         price = price.toFixed(2);

//         outputMessage = `Il prezzo scontato per gli over 65 è € ${price}`
//         console.log(outputMessage);
//     }

//     // PREZZO PER TUTTI GLI ALTRI UTENTI CHE NON HANNO DIRITTO A SCONTO
//     else {
//         price = price.toFixed(2);

//         outputMessage = `Il prezzo non scontato è € ${price}`
//         console.log(outputMessage);
//     }

// } else {
//     outputMessage = "I valori inseriti non sono validi"
//     console.log(outputMessage);
// }