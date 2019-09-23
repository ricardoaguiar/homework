console.log('------------------------');
console.log('Travel Time Calculation');

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};


function travelingTime(travelInformation) {

  //log to check object key/value properties
  console.log(`Speed: ${travelInformation.speed}`);
  console.log(`Distance to Travel: ${travelInformation.destinationDistance}`);

  //calculate the speed to distance rate
  let timeToDestination = travelInformation.destinationDistance / travelInformation.speed;
  console.log(`This in a console.log of the resulted calculation: ${timeToDestination}`); //8.64

  //convert timeToDestination to hours and minutes
  let hours = parseInt(Number(timeToDestination));
  let minutes = Math.round((Number(timeToDestination) - hours) * 60);
  // var minutes = timeToDestination % 360;

  // console.log(`${hours} hours and ${minutes} minutes`);
  //  console.log(timeToDestination);

  //assign the result to the function parameter
  // travelInformation = (`${hours} hours and ${minutes} minutes`);


  //return result // either one of the below works
  return (`${hours} hours and ${minutes} minutes`);
  // return hours + ' hours and ' + minutes + ' minutes';
  // return travelInformation;

}
const travelTime = travelingTime(travelInformation);
console.log(`It will take [ ${travelTime} ] to cover the distance.`);
// console.log(travelTime); // 4 hours and 42 minutes
