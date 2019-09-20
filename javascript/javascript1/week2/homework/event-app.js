console.log('---------------------------------');
console.log("getEventDate exercise");

//could not find a better solution. this is pretty much a copy of Marco's solution. 
// function getEventDate(day) {

//     let today = new Date();  //get the date from the local machine
//     let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]; //array for weekdays
//     let eventDate = today.getDay() + (day % 7); //calculate the futureDay of the event
//     return weekdays[eventDate];

// }
// console.log(getEventDate(7)); //log eventDate 


//another attempt
function getWeekDay(date) {
  //Create an array containing each day, starting with Sunday.
  let weekdays = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  );
  //Use the getDay() method to get the day.
  let day = date.getDay(); //assign today's date to variable day
  //Return the element that corresponds to that index.
  return weekdays[day];
}

let eventDate = new Date(); //get todays date 
eventDate.setDate(eventDate.getDate() + 12); //determine the future date
let futureDate = getWeekDay(eventDate); //call the function with the parameter

console.log(futureDate); //return Monday



//marco's solution
// function getEventWeekday(day) {
//     const today = new Date();
//     const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//     const eventDate = today.getDay() + (day % 7);

//     return week[eventDate];
// }

// // what happens when  getEventWeekday(12) ?!
// console.log('The event is ' + getEventWeekday(2));

// console.log('The event is ' + getEventWeekday(12));

