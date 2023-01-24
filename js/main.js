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
const calculationButton = document.getElementById("calculation_button");

calculationButton.addEventListener(
    "click",
    function () {
        // CHIEDERE ALL'UTENTE ETA'
        let inputAge = document.querySelector("select");
        let userAge = inputAge.value;
        console.log(userAge);

        // CHIEDERE ALL'UTENTE NOME
        let inputName = document.querySelector("#user_name");
        let userName = inputName.value;
        console.log(userName);

        // CHIEDERE ALL'UTENTE NUMERO KM
        let inputKm = document.querySelector("input[type='number']");
        let userKm = inputKm.value;
        console.log(userKm);

        // CALCOLO PREZZO PER KM
        const pricePerKm = 0.21;
        let price = userKm * pricePerKm;
        console.log(price);
        let ticket = "Biglietto Standard";

        if (userAge == "under18") {
            price = price - ((price * 20) / 100);
            price = price.toFixed(2);
            console.log(price);
            ticket = "Biglietto Under 18";
        }

        else if (userAge == "over65") {
            price = price - ((price * 40) / 100);
            price = price.toFixed(2);
            console.log(price);
            ticket = "Biglietto Over 65";
        }

        else {
            price = price.toFixed(2);
            console.log(price);
        }

        // GENERO NUMERO RANDOMICO DA 1 A 20
        let waggon = Math.floor(Math.random() * 20) + 1;

        // GENERO NUMERO RANDOMICO DA 1 A 100000
        let cpcode = Math.floor(Math.random() * 100000) + 1;

        // SCRIVO NOME PASSEGGERO SUL BIGLIETTO
        document.getElementById("passenger_name").innerHTML = userName;

        // SCRIVO TIPOLOGIA OFFERTA SUL BIGLIETTO
        document.getElementById("offer").innerHTML = ticket;

        // SCRIVO NUMERO CARROZZA SUL BIGLIETTO
        document.getElementById("waggon_train").innerHTML = waggon;

        // SCRIVO NUMERO BIGLIETTO SUL BIGLIETTO
        document.getElementById("cp_code").innerHTML = cpcode;

        // SCRIVO PREZZO SUL BIGLIETTO
        document.getElementById("ticket_price").innerHTML = price;
    }

);