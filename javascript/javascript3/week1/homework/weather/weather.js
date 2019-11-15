// API key daf90bf3cb90d58f344174ca345725da;
//unsplash auth 5e58f855051d6436bc43a9b1a127727f330c137360afcdcd32c1252f27955d79


function createNode(element) {
return  document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

//declare elements
let ul = createNode ('ul');
let li = createNode ('li');
let img = createNode ('img');
let input = createNode ('input');
let button = createNode ('button');
let p = createNode ('p');
let h1 = createNode ('h1');


//append elements
document.body.appendChild (h1);
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
input.style.width = '200px';
input.style.paddingLeft = '1em';
input.style.marginBottom = '1em';
input.style.fontSize = '.8em';
input.id = 'cityName';
input.setAttribute("class", "weatherApp");

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
button.setAttribute("class", "weatherApp");

p.style.fontFamily = 'Arial';
p.style.fontSize = '0.8em';
p.style.textTransform = 'uppercase';
p.style.fontWeight = '800';

li.style.fontFamily = 'Arial';
li.style.fontSize = '0.8em';
li.style.fontWeight = '400';


//get new weather by clicking the button

document.getElementById ('cityWeather').onclick = function() { 
  if (input.value === '') {
    return document.body.appendChild(p).innerText = 'Please enter a city name'; 
  }
  console.log (input.value);
  
  document.body.appendChild(ul);
  
  fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=daf90bf3cb90d58f344174ca345725da`)
    .then (res => res.json())
    // .then (function(data) {
    //    for (const i in data) {
    //     if (data.hasOwnProperty(i)) {
    //        console.log(`${i}: ${data[i]}`);
    //    }
    //   }
    .then (data => {
      console.log(data);
      // Object.entries(data).map(([key, value]) => {
      //   console.log (`${key}: ${value}`);        
      //     document.body.appendChild(p).innerText =  data.main.visibility;
      
      Object.getOwnPropertyNames(data).forEach((val, idx, array) => {
        console.log(val + ' -> ' + data[val]); 
        append(ul, li).innerText = `Current temperature in ${input.value}: ` + data.main.temp;
        append(li, img).innerText = data.weather[0].icon;
      
      });
      });
    }

 