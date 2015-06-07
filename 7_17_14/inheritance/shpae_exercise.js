require('locus');

var inherit = function(Child, Parent) {
	Child.prototype = new Parent();
  Child.prototype.constructor = Child;
};

function Quadrilateral(side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
}

Quadrilateral.prototype.perimeter = function() {
  return this.side1 + this.side2 + this.side3 + this.side4;
};

function Rectangle(w, h) {
  this.side1 = w;
  this.side2 = h;
  this.side3 = w;
  this.side4 = h;
}

inherit(Rectangle, Quadrilateral);

Rectangle.prototype.area = function() {
  return this.side1 * this.side2;
};

Rectangle.prototype.perimeter = function() {
  return (this.side1 * 2) + (this.side2 * 2);
};

function Square(s) {
  this.side1 = s;
  this.side2 = s;
  this.side3 = s;
  this.side4 = s;
}

inherit(Square, Rectangle);

Square.prototype.area = function() {
  return this.side1 * this.side1;
};

Square.prototype.perimeter = function() {
  return this.side1 * 4;
};

// eval(locus);