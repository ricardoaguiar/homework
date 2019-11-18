//giphy api tsVdxtFKdIvj8uPoxKnO2lgCkzId4h8y

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


let h1 = createNode ('h1');
let input = createNode ('input');
let inputNumber = createNode ('input');
let button = createNode ('button');
let p = createNode ('p');
let ul = createNode('ul');
let li = createNode('li');

getElId (giphyApp);
append (giphyApp, h1);
append(giphyApp, input);
append(giphyApp, button);
append(giphyApp, inputNumber);
append(giphyApp, ul);
// append(ul,li);

giphyApp.style.backgroundColor = '#ccc';
h1.innerText = 'GIPHY APP';
button.innerText = 'GIFS SEARCH'
button.id = 'gifsearch';
inputNumber.placeholder = 'number of gifs to display';



// let liIndex = 0;
// li.setAttribute('id', 'li'+liIndex++);

// const api = `https://api.openweathermap.org/data/2.5/weather?q=vejle&appid=daf90bf3cb90d58f344174ca345725da`;
const api = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=tsVdxtFKdIvj8uPoxKnO2lgCkzId4h8y&limit=5'`;

// document.getElementById ('giphyApp').onclick = () => {
window.onload = () => {
  fetch (api)
    .then (r => {
      console.log (r);
      return r.json ();
    })
    .then (data => {
      console.log ('success got data', data);
      for (let prop in data) {
          console.log(data[prop]);
        }
    });
};
