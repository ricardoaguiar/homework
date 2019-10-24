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
// console.log(button);

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

const select = document.querySelector('select');

select.onchange = function() {
    let selOption = spiritAnimal.list[spiritAnimal.list.selectedIndex].value;
    let selectedOpt = document.getElementById("selectedOption")

    console.log(selOption);
    if (selOption === 'clickButton') {
        // alert('click button')
        selectedOpt.innerHTML = ('Your current option is to click a button.');
    } 
    if (selOption === 'enterName') {
        // alert('enter name')
        document.getElementById("getName").disabled = true;
        document.getElementById("getNewName").disabled = true;
        selectedOpt.innerHTML = ('Your current option is to type your name.');
        document.getElementById("nameInput").setAttribute("mouseenter", `${name}`);
        document.getElementById("animalResult").innerHTML = `${name} - ${rand}`;

        
    } 
    if (selOption === 'hoverInput') {
        // alert('hover input')
        document.getElementById("getName").disabled = true;
        document.getElementById("getNewName").disabled = true;
        selectedOpt.innerHTML = ('Your current option is to mouse over the input field.');
        hoverOption.innerHTML = ('Type your name on the name field to get your spirit animal name');
        document.getElementById("nameInput").setAttribute("mouseover", `${name}`);
        document.getElementById("animalResult").innerHTML = `${name} - ${rand}`;
        
    } 
}