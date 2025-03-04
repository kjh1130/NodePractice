const fs = require('fs');

const readStream = fs.createReadStream('./mar4/ch3/readme4.txt');
const writeStream = fs.createWriteStream('./mar4/ch3/writeme3.txt');
readStream.pipe(writeStream);