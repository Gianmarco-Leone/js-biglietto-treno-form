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
const pricePerKm = 0.21;
const calculationButton = document.getElementById("calculation_button");

let userKm;
let userAge;

// console.log("I chilometri da percorrere sono " + userKm);

calculationButton.addEventListener(
    "click",
    function () {
        // CHIEDERE ALL'UTENTE NUMERO KM
        userKm = document.querySelector("input[type='number']").value;
        console.log(userKm);
        // CALCOLO PREZZO PER KM
        let price = userKm * pricePerKm;
        console.log(price);
        // CHIEDERE ALL'UTENTE ETA'
        userAge = document.querySelector("select").value;
        console.log(userAge);
    }
);


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