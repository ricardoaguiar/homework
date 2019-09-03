
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
