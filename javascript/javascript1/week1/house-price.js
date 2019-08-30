//peter house
// var peterHouseWidth = 8;
// var peterHouseDepth = 10;
// var peterHouseHeight = 10;
// var peterHouseGardenSize = 100;
// var peterHouseSize = peterHouseWidth * peterHouseDepth * peterHouseHeight;

console.log('house price');

let wideInMetersForPeter = 8;
let deepInMetersForPeter = 10;
let highInMetersForPeter = 10;
let gardenSizeInM2ForPeter = 100;

let volumeInMetersForPeter = wideInMetersForPeter * deepInMetersForPeter * highInMetersForPeter;
let housePriceForPeter = volumeInMetersForPeter * 2.5 * 1000 + gardenSizeInM2ForPeter * 300;

console.log('House price for Peter: ' + housePriceForPeter);

if (housePriceForPeter > 2500000) {
	console.log('The house is expensive');
} else {
	console.log('The price is okay');
}

let wideInMetersForJulia = 5;
let deepInMetersForJulia = 11;
let highInMetersForJulia = 8;
let gardenSizeInM2ForJulia = 70;

let volumeInMetersForJulia = wideInMetersForJulia * deepInMetersForJulia * highInMetersForJulia;
let housePriceForJulia = volumeInMetersForJulia * 2.5 * 1000 + gardenSizeInM2ForJulia * 300;

console.log('House price for Julia: ' + housePriceForJulia);
if (housePriceForJulia > 1000000) {
	console.log('The house is expensive');
} else {
	console.log('The price is okay');
}
