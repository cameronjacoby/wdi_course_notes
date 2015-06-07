var x = 1;

var changeNum = function(x) {
	x = 2;
}

changeNum(x);
console.log(x); // returns 1

// javascript is 'pass by value' --> only the 'x' inside of the function is changed; does not affect our global variable 'x'

var changeNum = function(taco) {
	taco = 2;
}

changeNum(x);
console.log(x); // returns 1

var changeFriend = function() {
	var friend = 'Billy';
}

changeFriend();
// console.log(friend); --> friend is not definited (only exists inside the function)

var friend = 'bill'

var changeFriend = function() {
	friend = 'joe';
};

changeFriend();
console.log(friend); // returns 'joe'


// 1. Parameters
//    - Pass by value --> values are 'passed' into the function as parameters
// 2. Scope
//    - Lexical Scope
//    - Closure
//    --> if there is a variable inside the function that is not initialized within the function or passed in as a paramter, 
//        the function will go looking for where the variable is initialized (will look outside the function for a global variable)
// 3. Hoisting
//    - Declaration vs. initialization
//    --> if a variable is initialized later in the function, the function 'declares' it on the first line and sets it equal to 'undefined'


// Procedural abstraction --> e.g. create a function, and give it a name

// Functions are 1st class citizens --> can be passed as values into other functions

var phrase = "Hello!!!"

var sayHello = function () {
    return phrase;
};

var greet = function (salutation){
    return salutation();
};

// What does this return??
greet(sayHello); // function is passed in as a value


// *** Functions are objects ***

sayHello.toString() // returns the body of the function as a string


//////////

// Intro to Objects

var han = {};
han.name = 'Han Solo';
han.greet = function(friendName) {
  return 'Hello ' + friendName;
};

han.greet(); // returns 'Hello undefined'
han.greet('Delmer') // returns 'Hello Delmer'

han.name // returns 'Han Solo'
han.greet // returns body of the function

console.log // logs 'function log() { [native code] }'
console.log(han.greet) // logs body of the function; 'greet' is the key, and the body of the function is the value

// when a function belongs to an objects, it is called a ** method **

/* multi line
comment */