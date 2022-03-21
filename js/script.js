$(document).ready(function () {
  let pizzaSize = 0;
  let crust = 0;
  let topping = 0;
  let orderNum = 0;
  let cost = 0;

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
    cost += newPizza.addCost()

    console.log(newPizza);
    console.log(newPizza.addCost());
    let pizzaContent;
    let crustContent;
    let toppingContent;
    if (pizzaSize == 1000) {
      pizzaContent = "Large - " + pizzaSize
    } else if (pizzaSize == 700) { 
      pizzaContent = "Medium - " + pizzaSize
    }else if(pizzaSize == 500){
      pizzaContent = "Small - " + pizzaSize
    }

    if (crust == 250) {
      crustContent = "Cheese-stuffed - " + crust
    } else if (crust == 200) { 
      crustContent = "Thick Crust - " + crust
    }else if(crust == 150){
      crustContent = "Thin Crust - " + crust
    }

    if (topping == 200) {
      toppingContent = "Pineapple - " + topping
    } else if (topping == 150) { 
      toppingContent = "Veges - " + topping
    }else if(topping == 100){
      toppingContent = "Onion - " + topping
    }
    $("tbody").append(`<tr><th scope='row'>${orderNum}</th><td>${pizzaContent}</td><td>${crustContent}</td><td>${toppingContent}</td><td>${newPizza.addCost()}</td></</tr>`)
    $(".check-out").show()
  })

  $(".check-out").click(function(){
    $(this).hide()
    $(".deliver-msg").show()
  })
  $(".bg-success").click(function () {
    let loc = prompt("Enter your location: ")
    $(".deliver-msg").hide()
    $(".accept-msg").text("Your order is ready. It will be delivered to " + loc +". Total charge amount Ksh. "+parseInt(cost + 200))
  })
    $(".bg-danger").click(function () {
    $(".deliver-msg").hide()
    $(".accept-msg").text("Your order is ready. Please come pick it. Total charge amount Ksh. "+parseInt(cost))
  })
})
