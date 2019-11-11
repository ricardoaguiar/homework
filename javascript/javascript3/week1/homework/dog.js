
const ul = document.getElementById('randomDog');
const url = 'https://dog.ceo/api/breeds/image/random';

const nrImg = 1;

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        console.log('data:', data);
        console.log(data.message);
        let randomImg = data.message;
    //     let li = document.createElement(`<img src="${randomImg}" />`);
    //     ul.appendChild(li);
    
    });
    
function showImg() {
    const img = document.createElement('img');
    const li = document.createElement('li');
}

function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

  function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }