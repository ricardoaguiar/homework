
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

    });

    // let img = document.createElement('li');
    // let li = document.createElement(`<img src='${message}' />`);

