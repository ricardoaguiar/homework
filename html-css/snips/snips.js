
//(JSON, null, space to format the JSON string)
let a = JSON.stringify(value, null, '  ');


//https://www.youtube.com/watch?v=wPElVpR1rwA
window.addEventListener('load', ()=> {
    let long;
    let lat;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        // const proxy = 'https://cors-anywhere.herokuapp.com/';
        // const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=daf90bf3cb90d58f344174ca345725da`;
        const api = `https://api.openweathermap.org/data/2.5/weather?q=vejle&appid=daf90bf3cb90d58f344174ca345725da`;
        fetch(api)
          .then(r => {
            console.log(r);
            return r.json();
        })
        .then(data => {
          const {base} = data.base;
          append(p).textContent = data;
        });
      });
    }
  
  });
  