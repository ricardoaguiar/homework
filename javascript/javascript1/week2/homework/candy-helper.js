console.log('---------------------------------');
console.log("candy helper");

//EALIER TRIAL AND ERROR
//let candyName = ['Sweet', 'Chocolate', 'Toffee', 'Gum'];
// let price = 0;
// if (boughtCandyPrices !== undefined && boughtCandyPrices <= 0) {
// boughtCandyPrices.forEach(function (price) {

//similar aproach of student manager but without the for loop
// for (let x = 0; x < boughtCandyPrices.length; x++) {
// if (candyType === 'Sweet') {
//   return boughtCandyPrices.push(weight * 0.5);
// }
// if (candyType === 'Chocolate') {
//   return boughtCandyPrices.push(weight * 0.7);
// }
// if (candyType === 'Toffee') {
//   return boughtCandyPrices.push(weight * 1.1);
// }
// if (candyType === 'Gum') {
//   return boughtCandyPrices.push(weight * 0.3);
// }

let boughtCandyPrices = [];
function addCandy(candyType, weight) {
  //trying with the ternary 
  candyType === 'Sweet' ? boughtCandyPrices.push(weight * 0.5) : false //if / else (false or null)?
  candyType === 'Chocolate' ? boughtCandyPrices.push(weight * 0.7) : null
  candyType === 'Toffee' ? boughtCandyPrices.push(weight * 1.1) : null
  candyType === 'Gum' ? boughtCandyPrices.push(weight * 0.3) : null
}

addCandy('Sweet', 10);// pushed 5 // false did not threw an error 
addCandy('Chocolate', 2.5);//pushed 1.75 //neither did null threw an error
addCandy('Toffee', 15);//16.5
addCandy('Gum', 1);//0.3

//check if the array has prices in it
console.log(boughtCandyPrices); //4 elements

// function canBuyMoreCandy(boughtCandy) { //removed the function 

let boughtCandy = boughtCandyPrices.reduce((a, b) => a + b); //could not get the array sum  value to return from inside the function.
console.log(`You spent ${boughtCandy} in candy`); //return 23.55 //it works outside the function 

let amountToSpend = Math.random() * 100;
//let needMoreCandy = amountToSpend.toFixed(2);
console.log(`Your balance is ${amountToSpend}`); //how much dough I have

if (amountToSpend > boughtCandy) {
  console.log('You can buy more candy');
} else {
  console.log('You ran out of cash.');
}
// }

