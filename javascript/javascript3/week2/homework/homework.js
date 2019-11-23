//delayPromisse


function delayPromisse(resolveAfter) {
    resolveAfter = resolveAfter * 1000;
    return new Promise (resolve =>
        setTimeout(() => {
            resolve();
            console.log(`I am called asynchronously after ${resolveAfter} seconds`);
        }, resolveAfter));
    }


delayPromisse(4);
delayPromisse(6);


function getCurrentLocation() {
    let long;
    let lat;
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition (position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                resolve(`Long: ${long},  Lat: ${lat}`);
                // console.log(long, lat);
            });
        } else {
            reject ("Location not found!")
        }
    })
}

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });


function setTimeoutPromise(t) {
 return new Promise((resolve) => {
     setTimeout(() => {
        resolve (t = t * 1000);
     }, t);
 });   
}
setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
});