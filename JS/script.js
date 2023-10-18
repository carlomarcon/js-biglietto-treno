let Distance = parseInt(prompt("Quanti km desidera percorrere ?"));

let Age = parseInt(prompt("Qual'è la sua età ?"));

let normalPrice = Distance * 0.21;

if (Age < 18) {
  let under18Price = normalPrice - normalPrice * 0.2;
  document.getElementById("price").innerHTML =
    under18Price.toFixed(2) + " €, hai ottenuto lo sconto del 20%";
} else if (Age > 65) {
  let over65Price = normalPrice - normalPrice * 0.4;
  document.getElementById("price").innerHTML =
    over65Price.toFixed(2) + " €, hai ottenuto lo sconto del 40%";
} else {
  document.getElementById("price").innerHTML =
    normalPrice.toFixed(2) +
    " €,non sono previsti sconti per la tua fascia d'età.";
}

if (isNaN(Distance && Age)) {
  alert("Mancano dei dati..");
  document.getElementById("price").innerHTML = "nullo, meglio tu vada a piedi.";
}
