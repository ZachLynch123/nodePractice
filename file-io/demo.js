const fs = require('fs');

/* const data = require('./data.json');
console.log(data.name);
 

fs.readFile('./data.json', 'utf-8' ,(err, data) => {
    let ah = JSON.parse(data)
    console.log(ah.name);
    
}); */

fs.readdir('c:/', (err, data) => {
    console.log(data);
    
});