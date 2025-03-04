const fs = require('fs').promises;

fs.readFile('./mar4/ch3/readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    })