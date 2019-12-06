// Function constructor

var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};

// Function constructor pattern (used defined with a Capital letter)
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person.prototype.calculateAge = function() {
	console.log(2019 - this.yearOfBirth); 
};

Person.prototype.lasName = 'Smith'

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1968, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

