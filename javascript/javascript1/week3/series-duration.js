console.log('------------------------');
console.log('Duration of my life');

// //<<< just realized that this is an array of objects, that's why I could not access the values as objects. :-( 
const seriesDurations = [
  {
    title: 'Friends',
    days: 9, 
    hours: 22,
    minutes: 32,
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: 'Seinfeld',
    days: 6,
    hours: 8,
    minutes: 0,
  }
] 

 let yearsTotal = 0; //variable to sum the total
  for (let {title, days, hours, minutes} of seriesDurations) {
   let time = ((days*24 + hours)*60 + minutes) / (365*24*60*80); 
    console.log(title, (time * 100).toFixed(2)+"%");
    console.log(yearsTotal += time);
  }


