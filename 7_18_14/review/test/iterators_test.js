
var expect = require('chai').expect,
    iterators = require('../src/iterators.js'),
    each = iterators.each,
    map = iterators.map;
    reduce = iterators.reduce;

describe('iterators', function() {
  describe('each', function() {
    it('should copy an array into a log', function() {
      var log = [];
      each([1, 2, 3], function(item) {
        log.push(item);
      });
      expect(log).to.eql([1, 2, 3]);
    });

    it('should sum all numbers in an array', function() {
      var sum = 0;
      each([1, 2, 3], function(item) {
        sum += item
      });
      expect(sum).to.eql(6);
    });

    it('should supply the index of the item it is iterating over', function() {
      var log = [];
      each([4, 5, 6], function(item, index) {
        log.push(index);
      });
      expect(log).to.eql([0, 1, 2]);
    });
  });

  describe('map', function() {
    it('should double numbers in an array', function() {
      var double = function(item) { return item * 2 };
      var result = map([2, 3], double);
      expect(result).to.eql([4, 6]);
    });

    it('should square numbers in an array', function() {
      var square = function(item) { return item * item };
      var result = map([2, 3], square);
      expect(result).to.eql([4, 9]);
    });
  });

  describe('reduce', function() {
    it('should sum up numbers in an array using add', function() {
      var add = function(x, y) { return x + y };
      var result = reduce([2, 3, 4], add);
      expect(result).to.eql(9);
    });
  });
});



