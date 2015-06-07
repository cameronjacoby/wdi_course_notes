// each function
var each = function(list, action) {
  for (var i = 0; i < list.length; i += 1) {
    action(list[i], i);
  }
};

// map function
var map = function(list, action) {
  var results = [];
  each(list, function(item) {
    results.push(action(item));
  });
  return results;
};

// reduce function
var reduce = function(list, action) {
  var accum = list[0];
  for (var i = 1; i < list.length; i += 1) {
    accum = action(accum, list[i]);
  }
  return accum;
}


// module.exports.each = each;
// module.exports.map = map;
// module.exports.reduce = reduce;

module.exports = {
  each: each,
  map: map,
  reduce: reduce
};