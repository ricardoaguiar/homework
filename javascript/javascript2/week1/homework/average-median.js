console.log('----------------------');
console.log('median and average');

// use the functions on this array
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

console.log('----------------------');
console.log('average');

function arrayAverage(housePrices){
    //Find the sum
    let sum = 0;
    for(let i in housePrices) {
        sum += housePrices[i];
    }
    //Get the length of the array
    let ct = housePrices.length;
    //Return the average / mean.
    return (sum / ct);
}

let averageResult = arrayAverage(housePrices);
console.log(averageResult.toFixed(2));


console.log('----------------------');
console.log('median');

function arrayMedian(housePrices) {
    if(housePrices.length === 0) return 0;
    housePrices.sort(function(a,b){
        return a-b;
    });
    let mid = Math.floor(housePrices.length / 2);
    // if(housePrices.length % 2)
    if(housePrices.length === 1)
    return housePrices[mid];
    // return (housePrices[mid - 1] + housePrices[mid]) / 2.0;
    return (housePrices[mid + 1] + housePrices[mid]) / 2.0;
}
let medianResults = arrayMedian(housePrices);
console.log(medianResults);

//render to the DOM
const paragraph = document.createElement('p');

document.getElementById('average').innerText = averageResult.toFixed(2);
document.getElementById('median').innerText = medianResults;

// document.getElementById('#arrayResults').innerHTML = `<div>
// <h4>Median Result:</h4><p>${medianResults}</p>
// <h4>Average Result:</h4><p>${averageResult.toFixed(2)}</p>
// </div>
// `;