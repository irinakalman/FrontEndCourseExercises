function add ( a, b) {
	return a + b;
}
add(0, 0);

function subtract (a, b) {
	return a - b;
}
subtract(10, 4);

function sum (numbers) {
	let x = numbers.reduce(function(prev,curr){
		return curr + prev;
	},0);
	return x;
}
sum([1, 2, 3]);

function multiply (array) {
	let total = 1;
	
	for (let i=0; i<array.length; i++) {
        total = total * array[i];
    } 
    return total;
}
multiply([2, 4]);

function power(num) {
	let x = Math.pow(4, 3);
	return x;
}
power(4, 3);

function factorial(num) {
	if (num == 0) 
        return 1;
		else {
			return (num * factorial(num-1));
}}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}