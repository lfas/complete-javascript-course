///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1997);

// //function declaration
// function calculateAge(year) {
// 	console.log(2019 - year);
// }

// //function expression
// var retirement = function(year) {
// 	console.log(65 - (2019 - year));
// }

// retirement(1990);

// //variables

// //console.log(age); //undefined, é declarado na criação, mas sem valor
// var age = 23;
// console.log(age);

// function foo () {
// 	var age = 65;
// 	console.log(age); //novo contexto
// }

// foo();
// console.log(age); //contexto global



///////////////////////////////////////
// Lecture: Scoping

// First scoping example

// var a = 'Hello!';
// first();

// function first() {
//     var b = ' Hi!';
//     second();

//     function second() {
//         var c = ' Hey!';
//         console.log(a + b + c);
//     }
// }

// Example to show the differece between execution stack and scope chain

// var a = 'Hello!';
// first();

// function first() {
//     var b = ' Hi!';
//     second();

//     function second() {
//         var c = ' Hey!';
//         third()
//     }
// }

// function third() {
//     var d = ' John';
//     console.log(a + b + c + d);
// }



///////////////////////////////////////
// Lecture: The this keyword

//Default: window object
//Method call: object calling the method

//The this keyword is not assigned a value until a function where it is defined actually called.

// console.log(this);

// calculateAge(1992);

// function calculateAge(year) {
// 	console.log(2019 - year);
// 	console.log(this);
// }

var john = {
	name: 'John',
	yearOfBirth: 1992,
	calculateAge: function() {
		console.log(this);
		console.log(2019 - this.yearOfBirth);

		// function innerFunction() {
		// 	console.log(this);
		// }
		// innerFunction();
	}
}

john.calculateAge();

var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};

//method borrow
mike.calculateAge = john.calculateAge;
mike.calculateAge();


