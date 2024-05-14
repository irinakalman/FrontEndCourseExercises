const reverseString = function(str) {
let split = str.split('');
let reverseStr = split.reverse();
let joinArr = reverseStr.join("");
return joinArr;
}

module.exports = reverseString
