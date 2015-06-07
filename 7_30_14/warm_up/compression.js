// Compression

// Input: AABCCCDDEEEE
// Output: 2AB3C2D4E

// Input: RRRAABQQQAAA
// Output: 3R2AB3Q3A

var compress = function(string) {
  var st = string;
  var arr = [];
  for (i = 0; i < string.length; i += 1) {
    arr.push(st[i]);
  }

  var output = '';
  var count = 0;
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    }
    else {
      count += 1;
      if (count === 1) {
        output += arr[i] + ' ';
        count = 0;
      }
      else {
        output += count + arr[i] + ' ';
        count = 0;
      }
    }
  }
  return output;
};

console.log(compress('AABCCCDDEEEE'));
console.log(compress('RRRAABQQQAAA'));




