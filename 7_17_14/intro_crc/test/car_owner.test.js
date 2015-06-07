var expect = require('chai').expect;
var CarOwner = require('../src/car_owner.js');

describe('CarOwner', function() {
  var bob;
  beforeEach(function() {
    bob = new CarOwner('Bob Loblaw', 100);
  });

	describe('initialization', function() {
    it('sets the name correctly', function() {
     	expect(bob.name).to.equal('Bob Loblaw');
    });
    it('sets money correctly', function() {
    	expect(bob.money).to.equal(100);
    });
  });

  describe('payment', function() {
    it('subracts from the car owner\'s money', function() {
      bob.pay(2);
      expect(bob.money).to.equal(98);
    });
  });


});