const palindromes = function(string) {
    const str = string.replace(/[^0-9a-z]/gi, '').toLowerCase();
  return str == str.split('').reverse().join('')
}

module.exports = palindromes
