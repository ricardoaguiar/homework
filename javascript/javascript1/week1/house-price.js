
let widthPeter = 8;
let depthPeter = 10;
let heightPeter = 10;
let m2GardenPeter = 100;
let volMeterPeter = widthPeter * depthPeter * heightPeter;
let peterHousePrice = volMeterPeter * 2.5 * 1000 + m2GardenPeter * 300;
console.log("Peter paid " + peterHousePrice);
if (peterHousePrice > 2500000) {
    console.log("Peter paid too much");
} else {
    console.log("Peter paid an okay price");
}

let widthJulia = 5;
let depthJulia = 11;
let heightJulia = 8;
let m2GardenJulia = 70;
let volMeterJulia = widthJulia * depthJulia * heightJulia;
let juliaHousePrice = volMeterJulia * 2.5 * 1000 + m2GardenJulia * 300;

console.log("Julia paid " + juliaHousePrice);
if (juliaHousePrice > 1000000) {
    console.log("Julia paid too much");
} else {
    console.log("Julia paid an okay price");
}