//exercise 2 dog age
var dogYearOfBirth = 2010; //number variable
var dogYearFuture = 2030; //number variable
var dogYear = dogYearFuture - dogYearOfBirth; //number variable
var shouldShowResultInDogYears = true; //boolean variable - return human years
var shouldShowResultInDogYears = false; //boolean variable - return dog years

if (shouldShowResultInDogYears) {
    var dogAge = dogYear * 4;
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
} else {
    console.log("Your dog will be " + dogAge + " dog years old in " + dogYearFuture);
}

