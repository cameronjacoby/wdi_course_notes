var origArray = [5, 4, 6, 3];

var merge = function(arr1, arr2) {
  var result = [], next;
  while (arr1.length && arr2.length) {
    // if (arr1[0] <= arr2[0]) {
    //   result.push(arr1.shift());
    // } else {
    //   result.push(arr2.shift());
    // }
    result.push(( arr1[0] <= arr2[0] ) ? arr1.shift() : arr2.shift());
  }
  return result.concat(arr1).concat(arr2);
}

var mergeSort = function(array) {
  var sortedArray = [];
  array.forEach(function(num) {
    sortedArray.push([num]);
  });
  while (sortedArray.length > 1) {
    var result = merge(sortedArray[0], sortedArray[1]);
    sortedArray.splice(0, 2, result);
  }
  return sortedArray[0];
};

console.log(mergeSort(origArray));


// // another solution:

// var mergeSort = function(array) {
//   if (array.length > 1) {
//     var arrOne = array.slice(0, Math.floor(array.length / 2));
//     var arrTwo = array.slice(Math.floor(array.length / 2), array.length);
//     return merge(mergeSort(arrOne), mergeSort(arrTwo));
//   } 
//   else {
//     return array;
//   }
// };

// console.log(mergeSort(origArray));















