
// const ul = document.getElementById('randomDog');
const urlRandom = 'https://dog.ceo/api/breeds/image/random';
const urlAll = 'https://dog.ceo/api/breeds/list/all';
let breed;
let dogObj = {};


// setInterval(() => {
//     fetch(urlRandom)
//         .then((response) => {
//             return response.json();
//         })
//         .then(data => {
//             console.log('data:', data);
//             console.log(data.message);
//             let randomImg = data.message; 
//             document.getElementById('randomDog').innerHTML = `<img src="${randomImg}" width=450px />`      
//         })
// }, 2000);
 

fetch(urlAll)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        // console.log('data:', data);
        // console.log(data.message);
        dogObj = data;
        console.log(typeof dogObj);
        Object.entries(data);
        console.log('obj entries:', data); //log JSON object
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                console.log('element:', element); //log JSON keys             
            }
        }
        

    //     Object.entries(data).forEach(([key, value]) => {
    //         console.log(`${key} ${value}`);        
    // });

    });

    // function createNode(element) { //function to create DOM elements
    //     return document.createElement(element);
    // }
    
    // function append(parent, el) { //function to append the 2nd parameter(element) to the 1st one 
    //     return parent.appendChild(el);
    // }

