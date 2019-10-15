console.log('----------------------');
console.log('spirit animal');

// const button = document.querySelector("#getName");
// console.log(button);

// button.addEventListener("click", function() {
//     alert('button was clicked');    
// });

const animalList = ['Crying Wolf', 'Hungry Bear', 'Godzilla', 'Skinny Cat', 'Stinky Fish', 'Fat Gorilla', 'Neckless Girafe'];

const button = document.querySelector("#getName");
const button2 = document.querySelector("#getNewName");
console.log(button);

// let nameValue = document.getElementById('nameInput').innerHTML;
// console.log(name);
// console.log(nameValue);


var rand = animalList[Math.floor(Math.random() * animalList.length)];

button.addEventListener("click", function () {
    console.log("button was clicked");
    const name = document.querySelector("#nameInput").value;
    if (name === "") {
        alert("Name must be filled out");
        // return false;
    } if (name !== "") {
    const p = document.createElement('p');
    document.getElementById('animalResult').innerHTML = `
    <div>
    <p>${name} - ${rand}</p>
    </div>
    `
    // document.getElementById('name2').innerHTML = name;
    // // document.getElementById('name2') = name;
    // document.getElementById('animalName').innerHTML = rand;
    }
// return;
});

button2.addEventListener("click", function () {
    var rand = animalList[Math.floor(Math.random() * animalList.length)];
    const name = document.querySelector("#nameInput").value;
    if (name === "") {
        alert("Name must be filled out");
    } 
    if (name !== "") {
    const p = document.createElement('p');
    document.getElementById('animalResult').innerHTML = `
    <div>
    <p>${name} - ${rand}</p>
    </div>
    `
    }
});
