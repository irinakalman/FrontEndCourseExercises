const repeatString = function(str, times) {
    if (times <0) {
        return 'ERROR';
    }
let output = '';
    
for ( let i = 0; i < times; i++ ){
    output += str;
}
return output;
}
module.exports = repeatString
