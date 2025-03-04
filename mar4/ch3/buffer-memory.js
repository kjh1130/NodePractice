const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const data1 = fs.readFileSync('./mar4/ch3/big.txt');
fs.writeFileSync('./mar4/ch3/big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss);