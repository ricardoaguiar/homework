console.log('---------------------------------');
console.log('Exercises - Week 2');

//Sum function
console.log('\n>> Sum function');

function sumOfAll(a, b) {
  return a + b;
}
let sumTotal = sumOfAll(1, 2);
console.log(`The sum total is ${sumTotal}`);



//Sum of array elements
console.log('---------------------------------');
console.log('\n>> Sum array of values');

let sumArr = [10, 20, 30, 40, 50].reduce(addArr, 0);

function addArr(accumulator, x) {
  return accumulator + x;
}
console.log(`The total sum of the array is ${sumArr}`);



//Max Value
console.log('---------------------------------');
console.log('\n>> Max value');

function maxValue(a, b) {
  return Math.max(a, b);
}
let checkValue = maxValue(5, 10);
console.log(checkValue);



//Max array of values
console.log('---------------------------------');
console.log('\n>> Max array of values');

let sumArr2 = [10, 20, 30, 40, 50]

function arrMaxValue(sumArr2) {
  return Math.max(...sumArr2);
}
console.log(arrMaxValue(sumArr2));


//Change to UPPERCASE
console.log('---------------------------------');
console.log('\n>> String to  Uppercase');

function changeToUpprCase(text) {
  return text.toUpperCase();
}
console.log(changeToUpprCase("small caps"));


//Change Array values to UPPERCASE
console.log('---------------------------------');
console.log('\n>> Array values to Uppercase');

let lowerCaseArray = ['john', 'mary', 'joe'];
console.log(lowerCaseArray.map(function (x) {
  return x.toUpperCase();
}));



//Half of All
console.log('---------------------------------');
console.log('\n>> Half of array elements');
function halfOf(sumArr2) { //using the array from line 44
  return sumArr2.map((i) => i / 2);
}
let halfResult = halfOf(sumArr2);
console.log(halfResult);



//Dates
console.log('---------------------------------');
console.log('\n>> Dates');

function daysLeft(dayDiff) {
  today = new Date('09/21/2019');
  futureDay = new Date('12/24/2019');
  // console.log(today);
  // console.log(futureDay);
  let timeDiff = futureDay.getTime() - today.getTime();
  dayDiff = timeDiff / (1000 * 3600 * 24);

  return dayDiff.toFixed(0);
}

console.log(`There are ${daysLeft()} until x-mas :-)`);
