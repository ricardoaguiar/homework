console.log("Ez Namey Starup");

const firstWords = ["Super", "Corporate", "Easy", "Never", "Awesome", "Big", "Done", "It", "Your", "Best"];
const secondWords = ["Fast", "Winner", "Give", "Finger", "GotIt", "Been", "Tomorrow", "Never", "Dies", "Gold"];

// const randomNumber = Math.floor(Math.random() * 10) + 0;
// const randomNumber2 = Math.floor(Math.random() * 10) + 0;

// const startupName1 = firstWords[randomNumber]; //randomize the first array
// const startupName2 = secondWords[randomNumber2]; //randomize the second array

// const startupName = `${startupName1} ${startupName2}`;
// // const b = Array.from(firstWords, x => x % 2 == 0);

// console.log(firstWords);
// console.log(secondWords);
// console.log(randomNumber);
// console.log(randomNumber2);
// console.log(startupName1);
// console.log(startupName2);
// console.log(startupName);

console.log("function starts here");

// function arrayCount(arr) {
//     let randomItem = Math.floor(Math.random() * 10) + 0;
//     for (let i = 0; i < arr.lenght; i++) {
//         console.log((arr[i][randomItem]));
//     }
// }
// console.log(firstWords);

// firstWords.forEach((a, b) => console.log(a + ` ${secondWords[b]}`));


//based on https://timonweb.com/tutorials/how-to-get-a-random-value-from-a-javascript-array/

function randomFirstName(firstWords, secondWords) {
    //combine the math.random result from each array in one return statement
    return firstWords[Math.floor(Math.random() * firstWords.length)] + " " + secondWords[Math.floor(Math.random() * secondWords.length)];
}
console.log(randomFirstName(firstWords, secondWords)); //it works!
