const fs = require('fs');

fs.readFile('./mar4/ch3/readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
})