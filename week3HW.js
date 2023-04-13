let pizzaToppings = ["cheese", "spinach", "pepperoni", "sausage"];
console.log(pizzaPlace = "Don's Pizza Place");

function greetCustomer() {
  console.log("Welcome to Don's Pizza Place our toppings are");

for (let topping of pizzaToppings) {

  console.log(topping)
}

}

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} pizza with ${crust} and ${toppings}`)
return [size, crust, toppings]

}

function preparePizza([size, crust, toppings]) {
  console.log("cooking pizza")

let pizza = {
size:size,
crust:crust,
toppings:toppings

}

return pizza

}
function servePizza (pizza){
console.log(`Order up! Here's your ${pizza.size} with ${pizza.crust} and ${pizza.toppings} `)
return pizza
}
greetCustomer()
servePizza(preparePizza(getPizzaOrder("Large","Thick","spinach", "cheese")))






