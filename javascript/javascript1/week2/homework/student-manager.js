console.log("student manager exercise");


//empty array
const class07Students = [];
//only the queen is allowed to join
const queenOfDenmark = "Margrethe";



function addStudentToClass(studentName) { //the studentName will be evaluated 

  for (let i = 0; i < class07Students.length; i++) { //begin the for loop
    if (class07Students.lenght === 0) {
      // class07Students.push(studentName);
    }
    //can't add an empty string or a number
    if (studentName === '' || studentName === parseInt(studentName)) {
      return "Please provide a name without numbers"
    }
    //only que queen can be added
    if (studentName === "queenOfDenmark") {
      return class07Students.push(studentName);
    }

    //can only have 6 regular students
    if (class07Students.length > 6) {
      return "The class is full and cannot take more students"
    }
    //can only have unique names
    if (studentName === class07Students[i]) { //compare the array elements inside the for loop
      return "The student is already in the class"
    }
  } //end the for loop.

  return class07Students.push(studentName);
}

// console.log(addStudentToClass(2.6)); //but parseInt lets decimals in
console.log(addStudentToClass("Margrethe")); //welcome the Queen
console.log(addStudentToClass("jr"));
console.log(addStudentToClass("jr")); //student already in the class
console.log(addStudentToClass("jr1"));
console.log(addStudentToClass("jr2"));
console.log(addStudentToClass("jr3"));
console.log(addStudentToClass("jr4"));
console.log(addStudentToClass("jr5"));
console.log(addStudentToClass("jr6")); //class is full

console.log(addStudentToClass(2)); //numbers not allowed
console.log(addStudentToClass("")); //empty not allowed

console.log(class07Students); //check the array elements

console.log("number of students on the array"); //number of elem. in the array
function getNumberOfStudents() {
  return class07Students.length;
}
console.log(getNumberOfStudents());