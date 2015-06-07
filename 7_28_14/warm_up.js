// Binary Search

// Given a sorted array
// [5, 8, 9, 21, 33, 34]
// find the index of a number
// say '8' which is less than '9'

/////SOLUTION

var bSearch = function(arr, target, leftInd, rightInd) {
  var leftIndex = leftInd || 0;
  var rightIndex = rightInd || arr.length - 1;
  var midIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (leftIndex > rightIndex) {
    return false;
  }
  else if (arr[midIndex] === target) {
    return true;
  }
  else {
    if (arr[midIndex] > target) {
      return bSearch(arr, target, leftIndex, midIndex - 1);
    }
    else {
      return bSearch(arr, target, midIndex + 1, rightIndex);
    }
  }
};


console.log(bSearch([5, 8, 9, 21, 33, 34], 8));