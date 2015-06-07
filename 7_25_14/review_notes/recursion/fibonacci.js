var fib = function(num) {
  console.log('Computing:', num);
  // terminal case
  if(num <= 2) {
    return 1;
  }
  // recursive case
  else {
    return fib(num - 1) + fib(num - 2);
  }
};

module.exports = fib;