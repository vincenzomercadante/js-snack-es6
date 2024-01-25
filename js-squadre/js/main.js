// array di squadre
const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

// assegno numeri randomi a foul e score
teams.forEach((team) => {
  team.foul = generateNumber(10, 1);
  team.score = generateNumber(90, 10);
});

// creo il mio nuovo array
const newTeamArray = teams.map((team) => {
  const { name, foul } = team;
  return {
    name,
    foul,
  };
});

// stampo su console
console.log(newTeamArray);
