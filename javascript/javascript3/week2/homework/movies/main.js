document
  .getElementById ('badMoviesBtn')
  .addEventListener ('click', getBadMovies);
document
  .getElementById ('badTitleMoviesBtn')
  .addEventListener ('click', getBadTitleMovies);
document
  .getElementById ('badMoviesAfter2kBtn')
  .addEventListener ('click', getBadMovies2k);

function getBadMovies () {
  fetch (
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
  )
    .then (res => res.json ())
    .then (data => {
      let output = '<h4>Bad Movies</h4>';
      data.forEach (function (badMovies) {
        if (`${badMovies.rating}` < 3) {
          output += `
                <ul class="list-group mb-4">
                <li class="list-group-item">Title: ${badMovies.title}</li>
                <li class="list-group-item">Year: ${badMovies.year}</li>
                <li class="list-group-item">Rating: ${badMovies.rating}</li>
                <li class="list-group-item">Votes: ${badMovies.votes}</li>
                <li class="list-group-item">Running Time: ${badMovies.running_times}</li>
                </ul>
                `;
        }
      });
      document.getElementById ('output').innerHTML = output;
    })
    .catch (err => {
      console.log ('Log Error', err);
    });
}

function getBadTitleMovies () {
  fetch (
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
  )
    .then (res => res.json ())
    .then (data => {
      let output = '<h4>Bad Title Movies</h4>';
      data.forEach (function (badTitleMovies) {
        if (
          `${badTitleMovies.rating}` <= 4.5 &&
          `${badTitleMovies.year}` >= 2000
        ) {
          output += `
                <ul class="list-group mb-4">
                <li class="list-group-item">Title: ${badTitleMovies.title}</li>
                <li class="list-group-item">Year: ${badTitleMovies.year}</li>
                <li class="list-group-item">Rating: ${badTitleMovies.rating}</li>
                </ul>
                `;
        }
      });
      document.getElementById ('output').innerHTML = output;
    })
    .catch (err => {
      console.log ('Log Error', err);
    });
}

function getBadMovies2k () {
  fetch (
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
  )
    .then (res => res.json ())
    .then (data => {
      let output = '<h4>Bad Movies Since 2000</h4>';
      data.forEach (function (badMovies2k) {
        if (`${badMovies2k.rating}` < 2.5 && `${badMovies2k.year}` >= 2000) {
          output += `
                <ul class="list-group mb-4">
                <li class="list-group-item">Title: ${badMovies2k.title}</li>
                </ul>
                `;
        }
      });
      document.getElementById ('output').innerHTML = output;
    })
    .catch (err => {
      console.log ('Log Error', err);
    });
}
