function CarOwner(name, money) {
	this.name = name;
  this.money = money;
}

CarOwner.prototype.pay = function(fee) {
  this.money -= fee;
};

module.exports = CarOwner;