console.log("I love pizza");

let favoritePizza = "Margherita";
let pizzaPrice  = 15;

console.log("New pizza order: " + favoritePizza + ". " + "The price of the pizza is: " + pizzaPrice +"USD");

let pizzaQuantity = 1;
let familySize = false;

if (familySize) {
    pizzaPrice = pizzaPrice * 2;
} 

let totalPrice = pizzaQuantity * pizzaPrice;

if (familySize) {
    console.log("New pizza order: " + pizzaQuantity + " family size " + favoritePizza);
} else {
    console.log("New pizza order: " + pizzaQuantity + " " + favoritePizza + ".");
}
console.log("The total cost for the order is: " + totalPrice + "USD");

console.log("++++++++ pizza function ++++++++");


function pizzaOrder(pizzaPrice, quantity, familySize, pizzaName) { //parameters for the pizza order

    let total = pizzaPrice * quantity; // calculate the total of a regular pizza order
    if (familySize == true) { //set the family size to true, if the customer order a family size
        total = total * 2; //the total is recalculated to twice as much as regular order
  //      console.log("New pizza order: " + quantity + " family size " + pizzaName); //output the order
//} else {
        console.log("New pizza order: " + quantity + " family size. " + "The price of the pizza is: " + total + " USD");    
} else {
   console.log("The total cost for the order is: " + total + " USD");
}
}
pizzaOrder(12, 2, true, "Cheese"); // call the function with the parameter

pizzaOrder(10, 1, false, "Cheese");
