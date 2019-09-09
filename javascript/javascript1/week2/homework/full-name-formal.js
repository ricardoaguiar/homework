console.log("Full Name Function Formal"); //return exercise name

function getFullName(firstName, lastName, useFormalName) {
   
    // if (firstName == "" || lastName == ""); // to be use in case of an empty form
    // alert("Please provide your first and last name");
   
    // let fullName = firstName + " " + lastName; //not needed

    if (useFormalName) { //check if useFormaName parameter has a true argument when calling the function
        return "Lord " + " " + firstName + " " + lastName; //if true, return "Lord" before the name
    }
    return firstName + " " + lastName; //if useFormalName is false, just give me firstName and lastName
}

//call the function passing the names as arguments and log the result
// let fullName1 = getFullName("Abraham", "Lincoln");
// console.log(fullName1);

// let fullName2 = getFullName("John", "Hancock");
// console.log(fullName2);

console.log (getFullName("Abraham", "Lincoln", true )); //log the function with arguments and boolean true // return "Lord"

console.log (getFullName("John", "Hancock", false)); //useFormalName false, return firstName, lastName
