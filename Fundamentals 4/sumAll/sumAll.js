const sumAll = function(rangeStart, rangeEnd) {
let sum = 0;
if ((rangeStart < 0 || rangeEnd < 0) || ((typeof rangeStart !== 'number') || (typeof rangeEnd !== 'number')))  {
    return "ERROR";}
if (rangeStart < rangeEnd) {
for (i = rangeStart; i <= rangeEnd; i++) {
    sum += i;
}
}
else if (rangeStart > rangeEnd){
   for (i = rangeEnd; i <= rangeStart; i++) {
    sum += i;
}
}
return sum;
}
module.exports = sumAll
