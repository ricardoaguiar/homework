let apiKey = 'tsVdxtFKdIvj8uPoxKnO2lgCkzId4h8y';
let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${apiKey}&limit=5`;
let img = document.createElement ('img');

function setup () {
  fetch (giphyAPI)
    .then (response => {
      return response.json ();
    })
    .then (json => {
      console.log (json);
      console.log (json.data[0].images.original.url);
      let imgGif = json.data[0].images.original.url;

      document.body.appendChild (img).src = imgGif + '.png';
    })
    .catch (err => console.log (err));
}
setup ();
