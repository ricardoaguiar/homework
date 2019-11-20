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

function removeEl(parent, rel) {
  return parent.removeChild(rel);
}

let h1 = createNode ('h1');
let input = createNode ('input');
let inputNumber = createNode ('input');
let button = createNode ('button');
let p = createNode ('p');
let ul = createNode('ul');


getElId (giphyApp);
append (giphyApp, h1);
append (giphyApp, input);
append (giphyApp, inputNumber);
append (giphyApp, button);
append(giphyApp, ul);


h1.innerText = 'GIPHY APP';
input.id = 'gifName';
button.innerText = 'SEARCH'
button.id = 'gifSearch';
inputNumber.placeholder = 'number of gifs to display';
inputNumber.id = 'gifNum';

document.getElementById ('gifSearch').onclick = () => {
  let imgCount = inputNumber.value;
  if (imgCount > 0) {
    // window.onload = () => {
    fetch (
        `http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=tsVdxtFKdIvj8uPoxKnO2lgCkzId4h8y&limit=${inputNumber.value}&offset=0&rating=G&lang=en'`
        )
      .then (r => {
        return r.json ();
      })
      .then (data => {
        data.data.forEach((giphy) => {
          console.log(giphy)
          let li = createNode("li")
          append(ul, li);
          let image = document.createElement("img")
          image.src = giphy.images.preview_webp.url
          console.log(image.src);
          // li.appendChild(image)
          append(li, image);
        })
        removeEl(giphyApp, p);
      });
  } else {
    append(giphyApp, p).innerText = 'Please enter desire number of Giphys';
  }
};
