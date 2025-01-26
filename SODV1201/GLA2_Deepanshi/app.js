const {saveObjectToJson, readJsonFile} = require('./utilities');

const team = {
    sport: "hockey",
    name: "Flames",
    city: "Calgary",
    yearFounded: 1972,
    cheer: "Go Flames Go",
    arenaName: "Saddledome",
    numberOfChampionships: 1
};

const filename = 'team.json';
saveObjectToJson(team, filename);


const teamData = readJsonFile(filename);
console.log(teamData);