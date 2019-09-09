console.log("getEventDate exercise");


function getEventDate(futureDay) {

    let day = new Date();  //get the date from the local machine
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]; //array for weekdays
    
    let eventDate = day.getDate() + (futureDay + day % 7); //calculate the futureDay of the event

    console.log(eventDate(5)); //log eventDate -- doesn't work????
}