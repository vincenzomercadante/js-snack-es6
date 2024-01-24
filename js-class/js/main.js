// array di studenti
const students = [
  {
    id: 213,
    name: "Marco della Rovere",
    grades: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    grades: 96,
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    grades: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    grades: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    grades: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    grades: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    grades: 84,
  },
];

// generazione array con i nomi degli studenti
const studentsNames = students.map((student) => student.name.toUpperCase());
// generazione array con gli studenti che hanno voto maggiore di 70
const studentsVote = students.filter((student) => student.grades > 70);
// generazione array con gli studenti che hanno voto maggiore di 70 e id maggiore di 120
const studentsVoteId = students.filter(
  (student) => student.grades > 70 && student.id > 120
);

// stampa
console.log(studentsNames);
console.log(studentsVote);
console.log(studentsVoteId);
