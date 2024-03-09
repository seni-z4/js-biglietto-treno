console.log("hello-world");

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// promt numbero di km percorso
// promt eta del passeggero

//biglietto numbero dei km(0.21)
//20% per i minorenni
//40% per i over 65

//numbero di km
//age
//numbero di km *0.21
//SE e minorenne allora un sconto del 20%
//Altrimenti  hai over 65 anni sconto del 40%
//altrimenti un sconto del 0%

//validation
// km > 0;
// age >= 0;
// !isNaN(km);
// !isNaN(age);

const pricePerKm = 0.21;

const km = parseInt(prompt("insert the km travled")); //number
console.log(km, typeof km);

const age = parseInt(prompt("insert the age")); //number
console.log(age, typeof age);

if (km > 0 && age >= 0 && !isNaN(km) && !isNaN(age)) {
  const prezzoBase = km * pricePerKm;
  console.log(prezzoBase);

  let sconto = 0;
  if (age < 18) {
    sconto = prezzoBase * 0.2;
  } else if (age > 65) {
    sconto = prezzoBase * 0.4;
  } else {
    sconto = 0;
  }

  //sconto finale
  const price = prezzoBase - sconto;
  console.log(price.toFixed(2), price);

  //html code update

  const priceElement = document.getElementById("price");
  console.log(priceElement);

  priceElement.innerHTML =
    "Prezzo del biglietto: " + price.toFixed(2) + " &euro;";
} else {
  alert("this number is not validaed");
}

//number of km
// const km = parseInt(prompt('number di km'));// string| null

//ask the age
// const age = parseInt(prompt('age'))
// console.log(age);

// if()
// //calcaola il prezzo ticket :
// //-cal the basic price o,21
// //- cal the sconto:
//  //- se eta
// //- prezzo file = prezz base - sconto

// //stampa il prezzo con 2 cifre

// cons
