const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const readStream = fs.createReadStream('./mar4/ch3/big.txt');
const writeStream = fs.createWriteStream('./mar4/ch3/big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('stream: ', process.memoryUsage().rss);
})