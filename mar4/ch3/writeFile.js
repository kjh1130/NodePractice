const fs = require('fs');

fs.writeFile('./mar4/ch3/writeme.txt', '글이 입력됩니다', (err) => {
    if(err) {
        throw err;
    }
    fs.readFile('./writeme.txt', (err, data) => {
        if(err) {
            throw err;
        }
        console.log(data.toString());
    })
})