var Rectangle = function(side1, side2) {
  this.side1 = side1;
  this.side2 = side2;
};

// instance function
Rectangle.prototype.area = function() {
  return this.side1 * this.side2;
};

// class function
Rectangle.taco = function() {
  return "this is not a taco";
};

Rectangle.numberOfRects = 0;

var r1 = new Rectangle(3, 4);
console.log(r1);
console.log(r1.area());