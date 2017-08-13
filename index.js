var first = require('./lib/the-first');
var second = require('./lib/the-second');

first.doTheFirst().then(
    (message) => {
        console.log(message);
        return second.doTheSecond(message);
    }
).then(
    (message) => {
        console.log(message);
        return second.doTheSecond(message);
    }
).then(
    (message) => {
        console.log(message);
    }
)