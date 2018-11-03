function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
  this.price = 0
}

Pizza.prototype.cost = function() {
  for(var i = 0; i < this.toppings.length; i++) {
    this.price += 0.50
  }
  if (this.size === "10") {
    this.price += 6.00
  } else if (this.size === "12") {
    this.price += 8.00
  } else if (this.size === "14") {
    this.price += 10.00
  } else if (this.size === "16") {
    this.price += 12.00
  }
}

//User interface logic
$(document).ready(function(){
  $("#pizza-selection").submit(function(event){
    event.preventDefault();
    $("#results").show();
    var size = $("#size").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var selectedToppings = $(this).val();
      toppings.push(selectedToppings);
    });
    var newPizza = new Pizza(toppings, size);
    newPizza.cost();
    console.log(newPizza);
    $("#price").text("$" + newPizza.price)
  });
});
