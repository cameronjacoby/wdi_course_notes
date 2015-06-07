// var name = 'Delmer';
// var name2 = 'Anil';

// console.log('Good morning', name);
// console.log('Good morning', name2);

function greeting() {} // not the proper way to declare a function; use the variable declaration

var greeting = function(taco, stuff) {
	// anything inside of here will execute when called
	console.log('Good morning', stuff, taco); // the comma prints a space between the string and variables
	console.log('taco:', taco);
	console.log('stuff:', stuff);
}

var name = 'Delmer';
var name2 = 'Anil';
greeting(name, name2);
greeting(name2, name);


//////////

// Say Hello

// Write a function called sayHello. The function should console log

// Hello World

var sayHello = function() {
	console.log('Hello World');
}

sayHello();


// Say Hello, Name.

// Write a function called sayHelloFriend. The function should take a person's name as a parameter and console log

// Hello, [name]

var sayHelloFriend = function(friend) {
	console.log('Hello,', friend);
}

sayHelloFriend('Cameron');


//////////

var finalGreeting = sayHelloFriend('Delmer'); // the function runs, but returns 'undefined' b/c we did not specify anything for our function to return

console.log(finalGreeting); // prints 'undefined'


var multiply = function(num1, num2) {
	// return result = num1 * num2;
	return num1 * num2;
}

var firstNum = 2;
var secNum = 3;
var taco = multiply(firstNum,secNum);

console.log(firstNum + ' multiplied by ' + secNum + ' is ' + taco);


//////////

// Return Hello, Name.

// Write a function called returnHello. The function should take a person's name as a paramter and return the string:

// "Hello, [name]"

var returnHello = function(friend) {
  return 'Hello, ' + friend;
}

var hello = returnHello('Cameron');
console.log(hello);


// Greet And Reply

// Write a function called greetAndReply. The function should take a person's name as a parameter, and take your name as a second parameter also. The function should then return the following string:

// "Hello, [name1].  My name is [name2]."
// Make sure to write this function using the previous function. That way, we don't have to write the same code twice.

var greetAndReply = function(person, me) {
  return returnHello(person) + '. My name is ' + me + '.';
}

var greeting = greetAndReply('Bob','Cameron');
console.log(greeting);