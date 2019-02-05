fs = require('fs');

const phoneNumber = (err, data) => {
    console.log('data: ', data);
}

fs.readdir('c:/', phoneNumber);

console.log('after');
