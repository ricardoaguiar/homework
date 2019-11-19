//giphy api tsVdxtFKdIvj8uPoxKnO2lgCkzId4h8y

function createNode (element) {
  return document.createElement (element);
}

function append (parent, el) {
  return parent.appendChild (el);
}

function getElId (id) {
  return document.getElementById (id);
}

function appendBody (e) {
    return document.body.appendChild (e);
  }

let h1 = createNode ('h1');
let input = createNode ('input');
let inputNumber = createNode ('input');
let button = createNode ('button');
let p = createNode ('p');
let ul = createNode('ul');
let li = createNode('li');
let img = createNode('img');

getElId (giphyApp);
append (giphyApp, h1);
append (giphyApp, input);
append (giphyApp, button);
append (giphyApp, inputNumber);


giphyApp.style.backgroundColor = '#ccc';
h1.innerText = 'GIPHY APP';
button.innerText = 'GIFS SEARCH'
button.id = 'gifSearch';
inputNumber.placeholder = 'number of gifs to display';
// img.setAttribute('class', 'loadGifs');


document.getElementById ('gifSearch').onclick = () => {
  let imgCount = inputNumber.value;
  if (imgCount > 0) {
    // window.onload = () => {
    fetch (
        // `http://api.giphy.com/v1/gifs/search?q=dog&api_key=tsVdxtFKdIvj8uPoxKnO2lgCkzId4h8y&limit=3&offset=0&rating=G&lang=en'`
        `http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=tsVdxtFKdIvj8uPoxKnO2lgCkzId4h8y&limit=${inputNumber.value}&offset=0&rating=G&lang=en'`
        )
      .then (r => {
        return r.json ();
      })
      .then (data => {
        const {data: [{images: {original: {url}}}]} = data;
        appendBody(img).src = url + '.png';
        p.innerText = "";
      });
  } else {
    append (giphyApp, p).innerText = 'Please enter desire number of Giphys';
  }
};

