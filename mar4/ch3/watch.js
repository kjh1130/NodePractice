const fs = require('fs');

fs.watch('./mar4/ch3/target.txt', (eventType, filename) => {
    console.log(eventType, filename);
})