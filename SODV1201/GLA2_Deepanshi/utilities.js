const fs = require('fs');


function saveObjectToJson(data, filename){
    fs.writeFileSync(filename, JSON.stringify(data, null, 2),'utf-8');
}

function readJsonFile(filename){
    const data = fs.readFileSync(filename, 'utf-8');
    return JSON.parse(data);
}

module.exports = {saveObjectToJson, readJsonFile};