/*
const url = "https://yesno.wtf/api";

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log("data:", data);

    let res = data.answer;
    console.log(res);
  });

// navigator.getBattery().then(function(battery) {

//     console.log(battery.charging);
// });

const delayPromisse = new Promise(resolve => {
  console.log(typeof resolve);
  setTimeout(() => {
    const logObj = {
      log: "Hello"
    };
    resolve(logObj);
  }, 1000);
});

delayPromisse.then(logObj => {
  console.log(logObj);
});

function myPromisse(successMessage, erroMessage) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve (successMessage);
    //   if (successMessage) {
        //   resolve(successMessage);
        // } else {
        // reject("promisse failed");
        reject(erroMessage);
      }
    }, 1000);
  });
}

setTimeout(() => {
  myPromisse("test")
    .then(successMessage => {
      console.log(successMessage);
    })
    .catch(err => console.log("promisse failed"));
}, 1000);
*/

const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

navigator
.getBattery()
  .then(function(battery) {
    console.log(battery.level);
  })
  .then(() => {
    return fetch(url);
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log("data:", data);
  });


// exercise 5  rasmus version
navigator
.getBattery()
.then(b => b.level)


const batteryPromisse = navigator.battery().then(b => .b.level);

const moviePromisse = fetch()

Promise.all (batteryPromisse, moviePromisse);
