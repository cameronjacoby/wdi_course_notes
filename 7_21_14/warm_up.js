var factorial = function(num) {
  if (num <= 1) {
    return 1;
  }
  else {
    console.log("running factorial");
    return num * factorial(num - 1);
  }
};

factorial(6);

// console.log("factorial");

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));


// var fib = function(position) {
//   if (position <= 2) {
//     return 1;
//   }
//   else {
//     return fib(position - 1) + fib(position - 2);
//   }
// };

// console.log("fibonacci");

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(9));
// console.log(fib(10));