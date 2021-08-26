let caesar = function(str, shift) {
    let res = '';
    for (let char of str) {
        let code = char.charCodeAt();
        let cipher = code;
        if (code >= 65 && code <= 90) {
            if (code + shift > 90) {
                cipher = 64 + ((code + shift % 26) % 90);
            } else if(code + shift < 65) {
                cipher = 90 - (64 - (code + shift));
            } else {
                cipher = code + shift;
            }
        } else if (code >= 97 && code <= 122) {
            if (code + shift > 122) {
                cipher = 96 + ((code + shift % 26) % 122);
            } else if (code + shift < 97) {
                cipher = 122 - (96 - (code + shift));
            } else {
                cipher = code + shift;
            }
        }
        res += String.fromCharCode(cipher);
    }
    return res;
}

module.exports = caesar
