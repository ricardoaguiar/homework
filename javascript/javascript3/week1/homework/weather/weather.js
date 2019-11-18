  function createNode (element) {
    return document.createElement (element);
  }

  function appendBody (e) {
    return document.body.appendChild (e);
  }

  function append (parent, el) {
    return parent.appendChild (el);
  }

  function getElId (id) {
    return document.getElementById (id);
  }

  let h1App = createNode ('h1');
  let input = createNode ('input');
  let button = createNode ('button');
  let p = createNode ('p');

  let ul = createNode ('ul'); //local weather
  let ul2 = createNode ('ul'); //searched weather

  let liTemp = createNode ('li');
  let liTemp2 = createNode ('li');
  let liIcon = createNode ('li');
  let liIcon2 = createNode ('li');
  let liWindSpeed = createNode ('li');
  let liWindSpeed2 = createNode ('li');
  let liWindDeg = createNode ('li');
  let liWindDeg2 = createNode ('li');
  let liSky = createNode ('li');
  let liSky2 = createNode ('li');
  let liSunrise = createNode ('li');
  let liSunrise2 = createNode ('li');
  let liSunset = createNode ('li');
  let liSunset2 = createNode ('li');
  let liLong = createNode ('li');
  let liLong2 = createNode ('li');
  let liLat = createNode ('li');
  let liLat2 = createNode ('li');
  let h2 = createNode ('h2');
  let h22 = createNode ('h2');
  let div = createNode ('div');
  // let div2 = createNode('div');

  //show the app on the DOM
  getElId (app);
  app.style.margin = '0 auto';
  app.style.borderWidth = '2px';
  app.style.borderColor = '#000';
  app.style.borderRadius = '0.4em';
  app.style.backgroundColor = '#098bbe';
  app.style.padding = '1em';
  app.style.maxWidth = '50%';
  append (app, h1App);
  append (app, input);
  append (app, button);
  append (app, p);

  append (app, div);
  append (div, ul);

  h1App.innerText = 'Weather Search';
  h1App.marginBottom = '1em';
  h1App.style.fontFamily = 'Arial';
  h1App.style.fontSize = '1.5em';
  h1App.style.color = '#fff';

  //style input
  input.type = 'text';
  input.placeholder = 'type city name';
  input.style.height = '3em';
  input.style.borderRadius = '0.4em';
  input.style.borderStyle = 'solid';
  input.style.borderWidth = 'thin';
  input.style.borderColor = '#ccc';
  input.style.width = '200px';
  input.style.paddingLeft = '1em';
  input.style.marginBottom = '1em';
  input.style.fontSize = '.8em';
  input.id = 'cityName';
  input.setAttribute ('class', 'weatherApp');

  //style search button
  button.innerText = 'Search';
  button.type = 'submit';
  button.style.padding = '0.955em';
  button.style.borderRadius = '0.4em';
  button.style.borderStyle = 'solid';
  button.style.borderWidth = 'thin';
  button.style.marginLeft = '10px';
  button.style.fontSize = '.8em';
  button.id = 'cityWeather';
  button.setAttribute ('class', 'weatherApp');

  p.style.fontFamily = 'Arial';
  p.style.fontSize = '0.8em';
  p.style.textTransform = 'uppercase';
  p.style.fontWeight = '800';
  p.style.color = '#fff';

  ul.style.listStyle = 'none';
  ul.style.fontFamily = 'Arial';
  ul.style.fontSize = '0.8em';
  ul.style.fontWeight = '900';
  // ul.style.height = '300px';
  // ul.style.maxWidth = '260px';
  ul.style.borderWidth = 'thick';
  ul.style.borderStyle = 'solid';
  ul.style.borderColor = '#fff4';
  ul.style.borderRadius = '0.4em';
  ul.style.backgroundColor = '#fff9 ';
  ul.style.padding = '20px';
  ul.setAttribute ('class', 'weatherListInfo');
  ul.style.display = 'flex';
  ul.style.flexFlow = 'column';
  ul.style.lineHeight = '2';

  //remember to ask about the difference in performance between
  //styling in js and external css
  //styled for ul2 is on linked css file
  ul2.setAttribute ('class', 'searchWeather');


  window.onload = () => {
    let long;
    let lat;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition (position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=daf90bf3cb90d58f344174ca345725da`;
        fetch (api)
          .then (r => {
            console.log (r);
            return r.json ();
          })
          .then (data => {
            const {main, weather, name, wind, clouds, sys, coord} = data;
            const icon = `<img src=http://openweathermap.org/img/wn/${weather[0].icon}@2x.png />`;
            append (ul, h2).innerText = `Local Weather in ` + name;
            append (ul, liTemp).innerText = `Temperature: ` + main.temp;
            append (ul, liIcon).innerHTML = icon;
            append (ul, liWindSpeed).innerText = `Wind Speed: ` + wind.speed;
            append (ul, liWindDeg).innerText = `Wind Degree: ` + wind.deg;
            append (ul, liSky).innerText = `Sky: ` + clouds.all;
            append (ul, liSunrise).innerText = `Sunrise: ` + sys.sunrise;
            append (ul, liSunset).innerText = `Sunset: ` + sys.sunset;
            append (ul, liLong).innerText = `Longitude: ` + coord.lon;
            append (ul, liLat).innerText = `Latitude: ` + coord.lat;
          });
      });
    }
  };

  //get new weather by clicking the button
  document.getElementById ('cityWeather').onclick = function () {
    if (input.value === '') {
      p.innerText = 'Please enter a city name';
    } else {
      p.innerText = ''; //empty the above p
      append (div, ul2); //append result of weather search
    }
    fetch (
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=daf90bf3cb90d58f344174ca345725da'`
    )
      .then (res => res.json ())
      .then (data2 => {
        const {main, weather, name, wind, clouds, sys, coord} = data2;
        console.log (data2);
        const icon2 = `<img src=http://openweathermap.org/img/wn/${weather[0].icon}@2x.png />`;
        append (ul2, h22).innerText = `Current Weather in ${input.value}`;
        append (ul2, liTemp2).innerText = `Temperature: ` + main.temp;
        append (ul2, liIcon2).innerHTML = icon2;
        append (ul2, liWindSpeed2).innerText = `Wind Speed: ` + wind.speed;
        append (ul2, liWindDeg2).innerText = `Wind Degree: ` + wind.deg;
        append (ul2, liSky2).innerText = `Sky: ` + clouds.all;
        append (ul2, liSunrise2).innerText = `Sunrise: ` + sys.sunrise;
        append (ul2, liSunset2).innerText = `Sunset: ` + sys.sunset;
        append (ul2, liLong2).innerText = `Longitude: ` + coord.lon;
        append (ul2, liLat2).innerText = `Latitude: ` + coord.lat;
      });
  };

