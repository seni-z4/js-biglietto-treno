console.log("hello world");

//chiedere all'utente numbero di km percori
//chiedere l'eta del passeggero

//prezzo del biglietto e basto ai km percorsi(0,21km)
//-va applicato un sconto di 20% se e minnorenne
//-va applicato un sconto di 40% se e over 65
//-il il resto avranno un sconto di o%

//per calcore il totale e  totale percorso = numero di km * 0.21
const km = parseInt(prompt("inserici il nnumbero di km percorsi")); //number
console.log(km, typeof km);
const age = parseInt(prompt("inserici il eta")); //number
console.log(age, typeof age);

const totalPercorso = km * 0.21;
console.log(totalPercorso.toFixed(2), "km"); //number

// let discount= 0;

// if (age < 18) {
//   const sconto1 = (totalPercorso.toFixed(2) * 20) / 100;
//   console.log(sconto1.toFixed(2), "numbero di sconto");

//   console.log("hai recevuto un sconto di 20%");
//   console.log(
//     `hai ricevuto un sconto di 20% e il tuo totale e di ${totalPercorso.toFixed(
//       2
//     )} e il tuo prezzo finale con il sconto e ${
//       totalPercorso.toFixed(2) - sconto1.toFixed(2)
//     }`
//   );
// } else if (age > 65) {
//   const sconto2 = (totalPercorso.toFixed(2) * 40) / 100;
//   console.log(sconto2.toFixed(2), "numbero di sconto");
//   console.log("hai receuto un sconto di 40%"); //number
//   console.log(
//     `hai ricevuto un sconto di 40% e il tuo totale e di ${totalPercorso.toFixed(
//       2
//     )} e il tuo prezzo finale con il sconto e ${
//       totalPercorso.toFixed(2) - sconto2.toFixed(2)
//     }`
//   );
// } else {
//   console.log(
//     `hai ricevuto un sconto di 0% e il tuo totale e di ${totalPercorso}`
//   );
// }

//SE il eta e minnore di 18
//-ha un sconto di 20%
//ALTTIMENTI SE il eta e over 65
//-ha un sconto di 40%
//ALTRIEMNTI
//-ha un sconto di 0%

//creare un altro if / else per per verificare se ha inserito un numbero o no

//SE t

if (totalPercorso > 0 && age > 0) {
  // se vero
  console.log("codice funziona");

  let sconto = 0;

  if (age < 18) {
    sconto = (totalPercorso * 20) / 100;
    console.log(sconto.toFixed(2), "numbero di sconto");

    console.log("hai recevuto un sconto di 20%");
    console.log(
      `hai ricevuto un sconto di 20% e il tuo totale e di ${totalPercorso.toFixed(
        2
      )} e il tuo prezzo finale con il sconto e ${
        totalPercorso.toFixed(2) - sconto.toFixed(2)
      }`
    );
  } else if (age > 65) {
    sconto = (totalPercorso * 40) / 100;
    console.log(sconto.toFixed(2), "numbero di sconto");
    console.log("hai receuto un sconto di 40%"); //number
    console.log(
      `hai ricevuto un sconto di 40% e il tuo totale e di ${totalPercorso.toFixed(
        2
      )} e il tuo prezzo finale con il sconto e ${
        totalPercorso.toFixed(2) - sconto.toFixed(2)
      }`
    );
  } else {
    console.log(
      `hai ricevuto un sconto di 0% e il tuo totale e di ${totalPercorso}`
    );
  }
  const result = totalPercorso - sconto;

  document.getElementById(
    "titcke-price"
  ).innerHTML = `you total price is ${result.toFixed(2)} &euro;`;
} else {
  // se e falso
  alert("inserici un numero valido");
}

//change the html document inner code

//take the id for the code you want to subsitiue

// total.innerHTML(`totale percorso e ${totalPercorso}`);

// console.log("hello-world");

// // Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// // il prezzo del biglietto è definito in base ai km (0.21 € al km)
// // va applicato uno sconto del 20% per i minorenni
// // va applicato uno sconto del 40% per gli over 65.

// // promt numbero di km percorso
// // promt eta del passeggero

// //biglietto numbero dei km(0.21)
// //20% per i minorenni
// //40% per i over 65

// //numbero di km
// //age
// //numbero di km *0.21
// //SE e minorenne allora un sconto del 20%
// //Altrimenti  hai over 65 anni sconto del 40%
// //altrimenti un sconto del 0%

// //validation
// // km > 0;
// // age >= 0;
// // !isNaN(km);
// // !isNaN(age);

// const pricePerKm = 0.21;

// const km = parseInt(prompt("insert the km travled")); //number
// console.log(km, typeof km);

// const age = parseInt(prompt("insert the age")); //number
// console.log(age, typeof age);

// if (km > 0 && age >= 0 && !isNaN(km) && !isNaN(age)) {
//   const prezzoBase = km * pricePerKm;
//   console.log(prezzoBase);

//   let sconto = 0;
//   if (age < 18) {
//     sconto = prezzoBase * 0.2;
//   } else if (age > 65) {
//     sconto = prezzoBase * 0.4;
//   } else {
//     sconto = 0;
//   }

//   //sconto finale
//   const price = prezzoBase - sconto;
//   console.log(price.toFixed(2), price);

//   //html code update

//   const priceElement = document.getElementById("price");
//   console.log(priceElement);

//   priceElement.innerHTML =
//     "Prezzo del biglietto: " + price.toFixed(2) + " &euro;";
// } else {
//   alert("this number is not validaed");
// }

// //number of km
// // const km = parseInt(prompt('number di km'));// string| null

// //ask the age
// // const age = parseInt(prompt('age'))
// // console.log(age);

// // if()
// // //calcaola il prezzo ticket :
// // //-cal the basic price o,21
// // //- cal the sconto:
// //  //- se eta
// // //- prezzo file = prezz base - sconto

// // //stampa il prezzo con 2 cifre

// // cons
