theSecond = {
    doTheSecond: function(message) {
        return new Promise( (resolve, reject) => {
            resolve(message.split('').reverse().join(''));
        })
    }
}

module.exports = theSecond;