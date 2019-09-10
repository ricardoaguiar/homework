



const class07Students = ["John", "Mary", "Joe", "Jenny", "Jonas", "Godfrey"]; //six elements in the array

function addStudentToClass(studentName) { //the studentName will be evaluated as an array item
    "use strict";
    const queenOfDenmark = "Margareth";
    //no single responsability - the function is doing multiple things
    if (studentName === "" || studentName === Number) { //not sure if this is correct
        console.log("Please use only letters. No blanks or numbers allowed.");
    } else if (class07Students.length > 5) { //this is not working
        console.log("The class is full.");
    }
}


const outPut = addStudentToClass("");
console.log(class07Students.push('George')); //pushed George in the array and it logged 7 items
console.log(outPut);


function getNumberOfStudents() {
    console.log(class07Students.length); //get the number of items in the array.
}

const classTotal = getNumberOfStudents(); //returns the array lenght without console.log. 
                                          //If commented out,it stops working.
                                          //Why console.log is not really required here?
                                          //perhaps because we are calling the function while assigning to
                                          //a variable?
