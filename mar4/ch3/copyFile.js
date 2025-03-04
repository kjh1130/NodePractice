const fs = require('fs').promises;

fs.copyFile('./mar4/ch3/readme4.txt', './mar4/ch3/writeme4.txt')
.then (() => {
    console.log('복사 완료');
})
.catch((error) => {
    console.error(error);
})