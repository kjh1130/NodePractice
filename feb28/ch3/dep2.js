const dep1 = require('./dep1');
console.log('require dep1', dep1);
module.export = () => {
    console.log('dep2',dep2);
}