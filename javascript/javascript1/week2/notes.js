
//from preparation material

let userName = 'John'; //variable outside the function (global)

function showMessage() { //function declaration
  //internal function variable (let message) accescible only inside the function
  //the function concatenates the internal variable (message) with the global variable (userName) 
  let message = 'Hello, ' + userName; //function body
  alert(message); 
}

//calling the function > the function body code runs
showMessage(); // Hello, John // result

console.log("+++++++++++++++++++++++++++++");

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function

console.log("+++++++++++++++++++++++++++++");

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable
