require('locus');

var Rectangle = function(side1, side2) {
	this.side1 = side1;
	this.side2 = side2 || side1; // if side2 is not passed as a param, uses side1 (for a square)

	this.area = function() {
		return this.side1 * this.side2;
	}

	this.perimeter = function() {
		return (this.side1 * 2) + (this.side2 * 2);
	}
}

eval(locus);