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

let kmNumber = prompt("Number of km to the destination");
console.log(kmNumber);

let age = prompt("the passangers age");
console.log(age);

let TotalKm = kmNumber * 0.21;
console.log(TotalKm);

if (age <= 18 && age >= 65) {
  console.log((TotalKm * 100) / 2, "this is a minaer");
} else {
  console.log((TotalKm * 100) / 4, "this is a adult");
}
