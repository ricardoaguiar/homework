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

getElId (giphyApp);
append (giphyApp, h1);
append(giphyApp, input);
append(giphyApp, button);
append(giphyApp, inputNumber);

giphyApp.style.backgroundColor = '#ccc';
h1.innerText = 'GIPHY APP';
button.innerText = 'GIFS SEARCH'
inputNumber.placeholder = 'number of gifs to display';

let xhr =
  'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=tsVdxtFKdIvj8uPoxKnO2lgCkzId4h8y&limit=5';

document.getElementById ('giphyApp').onload = function () {
  fetch (xhr)
    .then (res => {
      return res.json ();
    })
    .then (data => {
      console.log ('success got data', data);
    });
};
