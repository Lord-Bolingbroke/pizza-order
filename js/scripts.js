function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
  this.price = 0
}

Pizza.prototype.cost = function() {
  if (this.size === 10) {
    this.price = "$6.00"
  } else if (this.size === 12) {
    this.price = "$8.00"
  }
}

var testPizza = new Pizza(["pepperoni", "mushrooms"], 12)
