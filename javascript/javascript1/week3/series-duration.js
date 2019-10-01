console.log('------------------------');
console.log('Duration of my life');

// //<<< just realized that this is an array of objects, that's why I could not access the values as objects. :-( 
// const seriesDurations = [
//   {
//     title: 'Friends',
//     days: 9, 
//     hours: 22,
//     minutes: 32,
//   },
//   {
//     title: 'Sopranos',
//     days: 3,
//     hours: 14,
//     minutes: 0,
//   },
//   {
//     title: 'Seinfeld',
//     days: 6,
//     hours: 8,
//     minutes: 0,
//   }
// ] 
  
// let sum =  0;
// for (let {title, days, hours, minutes} of seriesDurations) {

//   let fraction = ((days*24 + hours)*60 + minutes) / (365*24*60);
//    sum = days + hours + minutes;

//   console.log(sum);

//   console.log(title, (fraction * 100).toFixed(2)+"%");
//   // console.log(total);
// }

// // const { a, b, total } = addTime.reduce(
// //   (result, current) => { ... },
// //   { total: 0 }
// // );



// // for (let {title, days, hours, minutes} of seriesDurations) {
// //   let fraction = ((days*24 + hours)*60 + minutes) / (365*24*60);
// //   console.log(title, (fraction * 100).toFixed(2)+"%");
// // }

//   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  
//   function lifespanPercentage(years){
//    return parseFloat(years * 100 / 80).toFixed(2);  
//   }
//   console.log(lifespanPercentage(40)+' %'); //40 years is 50% of a 80 year lifspan 


  const seriesDurations = [
    {
      title: 'Sopranos',
      days: 9, 
      hours: 22,
      minutes: 32,
    },
    {
      title: 'Seinfield',
      days: 3,
      hours: 14,
      minutes: 0,
    },
  ] 
  
  // console.log(Object.keys(seriesDurations[0]));


 function timeOfLife() {

  for (let {title, days, hours, minutes} of seriesDurations) {
    time = ((days*24 + hours)*60 + minutes) / (365*24*60);

    // let result = 0;
    // // result.push(time);
    // //  for (i = 0; i < result.length; i++) {
    //   if (result === 0) {
    //      time =+ result;
    //     console.log(result);
    //   }

    //  for (let i = 0; i < seriesDurations[Object.keys].length; i++) {
    //     if (seriesDurations[i] !== "string") {
    //       result.push(seriesDurations[i]);
    //     }
    //     console.log(result);
    //   } 
    
    // const i = seriesDurations.[Object.keys];

    // const i = seriesDurations[Object.keys];
    //    const entries = seriesDurations[i];
  
    let sum = 0;
    for (entries = 0; sum < seriesDurations[Object.keys.length]; sum++)
    sum += time;    
    // console.log("object.lenght");
    console.log(seriesDurations[Object.keys.length]);
    // console.log(time);
  
    console.log(sum);

    console.log(title, (time * 100).toFixed(2)+"%");
  }

}
 console.log(timeOfLife());
