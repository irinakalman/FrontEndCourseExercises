const removeFromArray = function(myArray, ...args) {
    args.forEach(arg => {
    let idx = myArray.indexOf(arg);
    if (idx >= 0) {
        myArray.splice(idx, 1);
    }
    
    });
    return myArray;
    }


module.exports = removeFromArray
