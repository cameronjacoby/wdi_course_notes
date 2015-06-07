var taco = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      taco.equal(-1, [1,2,3].indexOf(5));
      taco.equal(-1, [1,2,3].indexOf(0));
    })
  })
})