
console.log('JS2 W3 homework');

setTimeout(() => {console.log('Called after 2.5 seconds');}, 2500 );

function delayLog(delay, stringToLog) {
    delay = delay * 1000;
    setTimeout(() => {
        console.log(stringToLog);
    }, delay);
}
delayLog(0.5, "This is 0.5 seconds");
delayLog(1, "This is 1 seconds");
delayLog(2, "This is 2 seconds");
delayLog(3, "This is 3 seconds");
delayLog(5, "This is 5 seconds");


const earthLogger = function earthLogger() {
console.log('Earth');   
}
const saturnLogger = function saturnLogger() {
console.log('Saturn');
}

function planetLogFunction() {
    console.log(earthLogger());
    console.log(saturnLogger());
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//----------------------------------//

console.log('Geolocation \n');

//from mdn with a few mods
function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#logMyLocation');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  document.querySelector('#logLocation').addEventListener('click', geoFindMe);

  
  //----------------------------------------//


  function runAfterDelay(delay2, callback) {
    delay2 = delay2 * 1000;
    setTimeout(() => {
        callback();
    }, delay2);
  }


  runAfterDelay(6, function() {
      console.log('should be logged after 6 seconds');
  });
  runAfterDelay(8, function() {
      console.log('should be logged after 8 seconds');
  });

  //-------------------------------------//

  //double click

  document.addEventListener("dblclick", function(event) {
    console.log('Notification ' + event + ' was double clicked by the user');  
});
   //-----------------------------------//
   //jokerCreator

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    
}

// array of functions

let arrOf = ['f1', 'f2', 'f3'];


