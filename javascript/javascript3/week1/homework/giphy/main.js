//giphy api tsVdxtFKdIvj8uPoxKnO2lgCkzId4h8y

function createNode (element) {
    return document.createElement (element);
  }
  
  function appendBody(e) {
    return document.body.appendChild(e);
  }
  
  function append (parent, el) {
    return parent.appendChild (el);
  }
  
  function getElId(id) {
    return document.getElementById(id);
  }
  
  
  let h1 = createNode ('h1');
  let input = createNode ('input');
  let button = createNode ('button');
  let p = createNode ('p');


  getElId(giphyApp);
  giphyApp.style.backgroundColor = '#ccc';
  append(giphyApp, h1);
    h1.innerText = 'GIPHY APP';
