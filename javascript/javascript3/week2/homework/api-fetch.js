console.log('API Fetch and Wait');


const URL = 'https://api.spacexdata.com/v3/launches/latest/';
fetch(URL)
    .then(r => r.json())  
    .then((data) => {
        setTimeout(() => {
            console.log('Log after 3 seconds', data)
        }, 3000 )
    });
