var counter = function(arr) {
	return 'There are ' + arr.length + ' element in this array';
}

var adder = function(a, b) {
	return `The sum of the ${a} and ${b} is ${a+b}`;
}

var pi = 3.142;

module.exports.counter = counter; // avaiable module outside
module.exports.adder = adder;