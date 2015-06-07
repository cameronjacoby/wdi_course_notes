var recurse = function(depth) {
  // recursive case
  if (depth > 0) {
    console.log('SPIRALING DOWNWARD!!!');
    recurse(depth - 1);
    console.log('SPIRALING UPWARD!!!');
  }
  // terminal case
  else {
    console.log('AT THE BOTTOM');
  }
};