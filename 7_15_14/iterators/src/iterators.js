
// module.exports = {}; --> not a necessary line; shows that module.exports is an object


var each = function(list, action) {
	for (var i = 0; i < list.length; i += 1) {
		action(list[i], i);
	}
	return list;
}


// we will implement a contains function that takes
// 		two params
//		a list to search
//		an item to search for

var contains = function(list, item) {
  var result = false;

  list.forEach(function(currentItem, index) { // index is not needed if not using it in body of function
  	if (currentItem === item) {
  		result = true;
  	}
  });

  // for (var i = 0; i < list.length; i += 1) {
  // 	if (list[i] === item) {
  // 		result = true;
  // 	}
  // };

  return result;
}

module.exports.each = each;

// contains key has a value which is the contains function
module.exports.contains = contains;