console.log("Ez Namey Starup");

const firstWords = ["Super", "Corporate", "Easy", "Never", "Awesome", "Big", "Done", "It", "Your", "Best"];
const secondWords = ["Fast", "Winner", "Give", "Finger", "GotIt", "Been", "Tomorrow", "Never", "Dies", "Gold"];
const randomNumber = Math.floor(Math.random() * 10) + 0;

const startupName1 = firstWords[randomNumber]; //randomize the first array
const startupName2 = secondWords[randomNumber]; //randomize the second array

const startupName = `${startupName1}  ${startupName2}`;
// const b = Array.from(firstWords, x => x % 2 == 0);

console.log(firstWords);
console.log(secondWords);
console.log(randomNumber);
console.log(startupName1);
console.log(startupName2);
console.log(startupName); //it works but it joins the same index item from both arrays / fx. item 3 of first and second array. It would be better if could pick a random from each that are not the same index number. 