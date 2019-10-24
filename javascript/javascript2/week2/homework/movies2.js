const movies = [
    {"title": "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940},
    {"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300},
    {"title": "'Breaker' Morant","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420},
    {"title": "'Crocodile' Dundee II","year": 1988,"rating": 5.5,"votes": 47180,"running_times": 6480},
    {"title": "(500) Days of Summer","year": 2009,"rating": 7.7,"votes": 412368,"running_times": 5700},
    {"title": "*batteries not included","year": 1987,"rating": 6.6,"votes": 25636,"running_times": 6360},
    {"title": "...E tu vivrai nel terrore! L'aldilà","year": 1981,"rating": 6.9,"votes": 16484,"running_times": 5220},
    {"title": "...and justice for all.","year": 1979,"rating": 7.4,"votes": 25408,"running_times": 7140},
    {"title": "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940},
    {"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300}   
];

//1 short title
let shortTitle = movies.filter(val => val.title.length <= 20);
console.log(shortTitle);

//2 long title
let longTitle = movies.filter(val => val.title.length >= 25);
console.log(longTitle);

//3 1980 - 1989 movies
let numOfMovies = movies.filter(val => val.year >=1980 && val.year <= 1989);
console.log(numOfMovies);

//4 extra key tag


//5 rating > 6 chain with map to rating movies
let ratingMovies = movies.filter(val => val.rating > 6)
.map(val => val.rating);
console.log(ratingMovies);

//6 number of movies with keywords
// let searchItems = ['breaker', 'Crocodile', 'Days'];
let movieKeywords = (item) => movies.filter(val => val.title.toLowerCase().includes(val));
console.log('movieKeywords');
console.log(movieKeywords('Days'));

//7 find duplicates
// let findDups = movies => movies.filter((item, index) => movies.indexOf(item.title) != index);
let findDups = movies.reduce((a,b) => a.findIndex(e => e.title == b.title) < 0 ? [...a,b]: a,[]); 
console.log(findDups); //remove the duplicates obj but how do I get them into an array?
console.log(movies);