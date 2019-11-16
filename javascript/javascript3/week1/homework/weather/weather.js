//weather API key daf90bf3cb90d58f344174ca345725da;
//unsplash auth 5e58f855051d6436bc43a9b1a127727f330c137360afcdcd32c1252f27955d79

document.addEventListener("DOMContentLoaded", function(event) {



function createNode (element) {
  return document.createElement (element);
}

function append (parent, el) {
  return parent.appendChild (el);
}

function appendBody(e) {
  return document.body.appendChild(e);
}



//declare elements
// let body = createNode('body');
// body.setAttribute('class', 'content');
// body.style.margin = 'auto';
// appendBody(body);
let ul = createNode ('ul');
let li = createNode ('li');
let liTemp = createNode ('li');
let liIcon = createNode ('li');
let liWindSpeed = createNode ('li');
let liWindDeg = createNode ('li');
let liSky = createNode ('li');
let liSunrise = createNode ('li');
let liSunset = createNode ('li');
let liLong = createNode ('li');
let liLat = createNode ('li');
let img = createNode ('img');
let input = createNode ('input');
let button = createNode ('button');
let p = createNode ('p');
// let pCity = createNode ('p');
let h1 = createNode ('h1');
let divMap = createNode('div');
let divApp = createNode('div');

//append elements
appendBody(divApp);
appendBody (h1);
h1.innerText = 'Weather in your city';
h1.marginBottom = '1em';
h1.style.fontFamily = 'Arial';
h1.style.fontSize = '1.5em';

//appent and style input
document.body.appendChild (input);
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

//append and style search button
document.body.appendChild (button).innerText = 'Search';
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

ul.style.listStyle = 'none';
ul.style.fontFamily = 'Arial';
ul.style.fontSize = '0.8em';
ul.style.fontWeight = '400';
ul.style.height = '300px';
ul.style.maxWidth = '260px';
ul.style.borderWidth = 'thin';
ul.style.borderStyle = 'solid';
ul.style.borderColor = '#ccc';
ul.style.borderRadius = '0.4em';
ul.style.padding = '20px';
ul.setAttribute('class', 'weatherListInfo');
ul.style.display = 'flex';
ul.style.flexFlow = 'column';


  window.addEventListener('load', ()=> {
    let long;
    let lat;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const proxy = 'https://cors-anywhere.herokuapp.com/'; //avoid cors issue on localhost
        const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=daf90bf3cb90d58f344174ca345725da`;
        // const api = `https://api.openweathermap.org/data/2.5/weather?q=vejle&appid=daf90bf3cb90d58f344174ca345725da`;
        fetch(api)
          .then(r => {
            console.log(r);
            return r.json();
        })
        .then(data => {
          const {base, main, weather} = data; //ECMA2015
          const icon = `<img src=http://openweathermap.org/img/wn/${weather[0].icon}@2x.png />`
          console.log(base);
          console.log(main.temp);
          console.log(weather[0].description);
          console.log(weather[0].icon);
          appendBody(ul);
          append(ul, liTemp).innerText = main.temp;
          append(ul, li).innerHTML = icon;
        });
      });
    }
  });
  


appendBody(divMap);
divMap.setAttribute('id', 'map');
divMap.style.height = '50%';
divMap.style.borderWidth = 'solid';
divMap.style.backgroundColor = '#333';


//get new weather by clicking the button
document.getElementById ('cityWeather').onclick = function () {
  if (input.value === '') {
    document.body.appendChild (p).innerText = 'Please enter a city name';
  } else {
    document.body.appendChild (p).innerText = `Current weather in ${input.value}`;
    document.body.appendChild (ul);
  }
  console.log (input.value);

  fetch (
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=daf90bf3cb90d58f344174ca345725da&containerid:'openweathermap-widget-12'`
  )
    .then (res => res.json ())
    .then (data => {
      console.log (data);
      Object.getOwnPropertyNames (data).forEach ((val, idx, array) => {
        console.log (val + ' -> ' + data[val]);
        append (ul, liTemp).innerText = `Current temperature: ` + data.main.temp;
      
        // append(ul, liIcon);
        // append(liIcon, img).innerHTML = showImg(`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        
        append (ul, liWindSpeed).innerText = `Wind Speed: ` + data.wind.speed;
        append (ul, liWindDeg).innerText = `Wind Degree: ` + data.wind.deg;
        append (ul, liSky).innerText = `Sky: ` + data.clouds.all;
        append (ul, liSunrise).innerText = `Sunrise: ` + data.sys.sunrire;
        append (ul, liSunset).innerText = `Sunset: ` + data.sys.sunset;
        append (ul, liSunset).innerText = `Sunset: ` + data.sys.sunset;
        append (ul, liLong).innerText = `Longitude: ` + data.coord.lon;
        append (ul, liLat).innerText = `Latitude: ` + data.coord.lat;


      });

    });
};



console.log("DOM fully loaded and parsed");
});
