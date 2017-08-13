theFirst = {
    doTheFirst: function() {
        return new Promise((resolve, reject) => {
            resolve("Do the  first thing!")
        })
    }
}

module.exports = theFirst;