// API key daf90bf3cb90d58f344174ca345725da;
//unsplash auth 5e58f855051d6436bc43a9b1a127727f330c137360afcdcd32c1252f27955d79


fetch('https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=daf90bf3cb90d58f344174ca345725da')
.then(function(resp) {
  return resp.json();
})
.then (function(weatherdata) {
    console.log(weatherdata);
    
});

// fetch("")
//   .then(function(resp) {
//     return resp.json();
//   })
//   .then(function(unsplash) {
//     console.log(unsplash);
//   });
