var events = require('events');

var util = require('util');
// var myEmmiter = new events.EventEmitter();

// myEmmiter.on('someEmmit', function(msg) {
// 	console.log(msg);
// });

// myEmmiter.emit('someEmmit', 'the event was emmitted');

var Person = function(name) {
	this.name = name;
}

util.inherits(Person, events.EventEmitter);

var hoa = new Person('Hòa');
var hong = new Person('Hồng');
var huong = new Person('Hường');
var people = [hoa, hong, huong];

people.forEach(function(person) {
	person.on('speak', function(msg) {
		console.log(person.name + ' said: ' +msg);
	});
});

hoa.emit('speak', 'I am Hòa');
