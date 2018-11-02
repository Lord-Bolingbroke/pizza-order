function Order() {
  this.pizzas = []
}

function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
  this.price = 0
}

Pizza.prototype.cost = function() {
  for(var i = 0; i < this.toppings.length; i++) {
    this.price += 0.50
  }
  if (this.size === 10) {
    this.price += 6.00
  } else if (this.size === 12) {
    this.price += 8.00
  } else if (this.size === 14) {
    this.price += 10.00
  } else if (this.size === 16) {
    this.price += 12.00
  }
}

var smallPizza = new Pizza(["pepperoni", "mushrooms"], 10)
var mediumPizza = new Pizza(["pepperoni", "mushrooms"], 12)
var largePizza = new Pizza(["pepperoni", "mushrooms"], 14)
var extraLargePizza = new Pizza(["pepperoni", "mushrooms"], 16)

$(document).ready(function(){
  $("#pizza-selection").submit(function(event){
    event.preventDefault();
    $("#results").show();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      console.log(toppings);
      $("#toppings-result").append(toppings + "<br>");
    });
    var size = $("#size").val();
    $("#size-result").text(size);
  });
});
