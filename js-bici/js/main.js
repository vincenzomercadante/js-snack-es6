// array di bici
const bici = [
  {
    nome: "Bici 1",
    pesoGrammi: generateNumber(600, 100),
  },
  {
    nome: "Bici 2",
    pesoGrammi: generateNumber(600, 100),
  },
  {
    nome: "Bici 3",
    pesoGrammi: generateNumber(600, 100),
  },
  {
    nome: "Bici 4",
    pesoGrammi: generateNumber(600, 100),
  },
  {
    nome: "Bici 5",
    pesoGrammi: generateNumber(600, 100),
  },
  {
    nome: "Bici 6",
    pesoGrammi: generateNumber(600, 100),
  },
];

// variabili per calcolare la bici con il peso più leggero
let pesoMinore = bici[0].pesoGrammi;
let lighterBike;

// ciclo che mi cerca
for (let bicicletta of bici) {
  if (bicicletta.pesoGrammi < pesoMinore) lighterBike = bicicletta;
}

// decostructuring
const { nome, pesoGrammi } = lighterBike;
// stampa in console
console.log(
  `La bici più leggera è la ${nome} con il peso di ${pesoGrammi} grammi`
);
