const ftoc = function(fahrenheit) {
let ftemp = fahrenheit;
let celtemp = (ftemp - 32) * 5/9;
let rounded = Math.round(celtemp * 10)/10;
return rounded;
}

const ctof = function(celsius) {
let ctemp = celsius;
ftemp = ctemp * 9/5 + 32;
let rounded = Math.round(ftemp * 10)/10;
return rounded;
}

module.exports = {
  ftoc,
  ctof
}
