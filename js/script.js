$(document).ready(function () {
  let pizzaSize = 0;
  let crust = 0;
  let topping = 0;
  let orderNum = 0;

  function Pizza(size, topping, crust) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
  }

  Pizza.prototype.addCost = function(){
    return this.size + this.topping + this.crust;
  }

  $("#add-to-cart").click(function(){
    pizzaSize = parseInt($("#pizza-size").val());
  topping = parseInt($("#topping").val());
  crust = parseInt($("#crust").val());

    orderNum += 1;

  let newPizza = new Pizza(pizzaSize, topping, crust);

    console.log(newPizza);
    console.log(newPizza.addCost());
    $("tbody").append(`<tr><th scope='row'>${orderNum}</th><td>${newPizza.size}</td><td>${newPizza.crust}</td><td>${newPizza.topping}</td></tr>`)
  })

})
