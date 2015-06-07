// var name = prompt("What's your name?");
// if(name === "Cameron") { //always use triple equals to be safe --> makes extra sure expression is checking for equality
// 	console.log("What a great name!"); //prints to the console --> COMMAND + OPTION + j in Chrome to see result
// }
// else if(name === "Connie") {
// 	console.log("WOW great name!");
// }
// else {
// 	console.log("That's an OK name.");
// }

//highlight text + COMMAND + / --> comments out the highlighted text


var dogs = ["Rusty", "Tater", "Bingo", "Charlie", "Maverick"];

var times = 0

while(times < dogs.length) {
	console.log(dogs[times] + " says bark!!");
	times ++;
}


for(var i = 0; i < dogs.length; i++) { //for a variable 'i', while i is less than the legnth of 'dogs', run code, then increment //convention is to use 'i'
	console.log(dogs[i] + " says bark!!");
	console.log(i);
}


// var times = 0;

// while(times < 10){
// 	console.log("HI THERE");
// 	times ++;
// }

// console.log("The loop is over!!!");