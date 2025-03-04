const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./mar4/ch3/readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./mar4/ch3/readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);