const fs = require('fs');

/* const data = require('./data.json');
console.log(data.name);
 

fs.readFile('./data.json', 'utf-8' ,(err, data) => {
    let ah = JSON.parse(data)
    console.log(ah.name);
    
}); */

/* fs.readdir('c:/', (err, data) => {
    console.log(data);
}); */

var data = {
    name: 'Bob'
}

fs.writeFile('data.json', JSON.stringify(data), err => {
    console.log('write finished', err);
});