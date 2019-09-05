console.log("Full Name Function"); //return exercise name

function getFullName(firstName, lastName) {
    return firstName + " " + lastName //concatenate firstName and lastName arguments
}

//call the function passing the names as arguments and log the result
let fullName1 = getFullName("Abraham", "Lincoln");
console.log(fullName1);

let fullName2 = getFullName("John", "Hancock");
console.log(fullName2);