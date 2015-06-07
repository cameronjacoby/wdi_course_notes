var fib = function(num) {
  if (num <= 2) {
    return 1;
  }
  else {
    var lastOne = 1;
    var lastTwo = 1;
    var count = 2;
    var result;

    while (count < num) {
      result = lastOne + lastTwo;
      lastTwo = lastOne;
      lastOne = result;
      count += 1;
    }
    return result;
  }
}

console.log(fib(50));