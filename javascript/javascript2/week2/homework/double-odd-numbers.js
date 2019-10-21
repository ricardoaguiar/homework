let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}
console.log("The doubled numbers are", newNumbers); // [2, 6]

let numResults = numbers.map((val) => {
    return val % 2 !== 0 ? val * 2 : null  ;
  });

let numResults2 = numResults.filter((val) => {
     if (val % 2 !== 1) 
     return val * 2;
});
  
console.log(numResults);
console.log(numResults2);