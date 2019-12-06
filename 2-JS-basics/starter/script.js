/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
bills = [124,48,268];
tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);

function tipCalculator (bill){
	var tipPorcentage;

	if (bill<50) {
		tipPorcentage = 0.20;
	}		
	else if (bill>=50 && bill<=200) {
		tipPorcentage = 0.15;
	}		
	else {
		tipPorcentage = 0.10;
	}		
	
	return bill * tipPorcentage;
}
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/* FAIL
function calculateBMI (person){
	person.bmi = person.mass / (person.height * person.height);
}

var mark = {
	fullName: 'Mark M.',
	mass: 78,
	height: 1.69
}

var john = {
	fullName: 'John J.',
	mass: 92,
	height: 1.95
}

calculateBMI (mark);
calculateBMI (john);

if (mark.bmi > john.bmi) {
	console.log(mark.fullName + ' has the highest BMI: ' + mark.bmi);
} else if (mark.bmi < john.bmi) {
	console.log(john.fullName + ' has the highest BMI: ' + john.bmi);
} else {
	console.log(mark.fullName + ' and ' + john.fullName + ' have the same BMI: ' + mark.bmi);
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
	name: 'John',
	bills: [124, 268, 180, 42],
	tips: function() {
		tipCalculator(this.bills);
	}
}

function tipCalculator (bills) {
	var tipPorcentage;
	var tipsValues = [];
	
	for (i=0; i < bills.length; i++){
		if (bills[i] < 50) {
			tipPorcentage = 0.20;
		}		
		else if (bills[i] >= 50 && bills[i] <= 200) {
			tipPorcentage = 0.15;
		}		
		else {
			tipPorcentage = 0.10;
		}

		tipsValues[i] = bills[i] * tipPorcentage;		
	}

	return tipsValues;
}

console.log(john);

