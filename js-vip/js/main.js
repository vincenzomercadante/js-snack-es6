// costante che identifica il nome del tavolo
const nomeTavolo = "Tavolo Vip";

// array di stringhe con i nomi dei vip
const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Leonardo di Caprio",
];

// ciclo che per ogni vip iterato me lo inserisce all'interno del nuovo array sottoforma di oggetto
const vipsInvited = vips.map((vip, posto) => {
  return {
    tavolo: nomeTavolo,
    nome: vip,
    postoOccupato: posto + 1,
  };
});

console.log(vipsInvited);
