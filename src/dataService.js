const fs = require('fs');

const jsonObj = fs.readFileSync('./src/data.json');
const data = JSON.parse(jsonObj);

console.log(data);
