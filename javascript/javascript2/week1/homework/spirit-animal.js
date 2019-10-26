console.log('----------------------');
console.log('spirit animal');

// // Function to change the content of t2
// function modifyText(new_text) {
//     var t2 = document.getElementById("t2");
//     t2.firstChild.nodeValue = new_text;    
//   }
   
//   // Add event listener to table with an arrow function
//   var el = document.getElementById("outside");
//   el.addEventListener("click", () => { modifyText("four"); }, false);




const animalList = ['Crying Wolf', 'Hungry Bear', 'Godzilla', 'Skinny Cat', 'Stinky Fish', 'Fat Gorilla', 'Neckless Girafe'];


// var rand = animalList[Math.floor(Math.random() * animalList.length)];

// const getNameBtn = document.querySelector('#getName');
// const getNewNameBtn = document.querySelector('#getNewName');
// const animalResult = document.getElementById('animalResult');
// const selectedOpt = document.getElementById('selectedOption');
// const nameInput = document.querySelector('name');
// const nameOutput = document.getElementById('nameOutput');
// const clickButton = document.getElementById('clickButton');
const enterName = document.getElementById('enterName');
const hoverInput = document.getElementById('hoverInput');


const input = document.querySelector('input'); //select input field
const log = document.getElementById('values') //get id values and assing to log

// input.addEventListener('input', updateValue); //add eventListener to input
input.oninput = function() {
  log.innerText = input.{getAnimalName()};
}

function updateValue(e) {
  log.innerText = e.target.value;
}


function getAnimalName() {
  return animalSpirit = animalList[Math.floor(Math.random() * animalList.length)];
}


// getNameBtn.addEventListener("click", function() {
//     console.log("button was clicked");
//     const name = document.getElementById("#nameInput").value;   
//     if (name === "") {
//         alert('Please select an option and fill out your name.');
//      } else if (name !== "") {
//          animalResult.innerText = `${name} - ${rand}`;
//      }
//     });

// getNewNameBtn.addEventListener("click", function () {
//     const rand = animalList[Math.floor(Math.random() * animalList.length)];
//     // const name = document.querySelector("#nameInput").value;
//     if (name === "") {
//         animalResult.innerText = `Ops... we need a name first!`;
//     } else {
//     animalResult.innerText = `${name} - ${rand}`
//     }
// });

// const select = document.querySelector('select');
// getNameBtn.disabled = true;
// getNewNameBtn.disabled = true;

// select.onchange = function(selOption) {
//     selOption = spiritAnimal.list[spiritAnimal.list.selectedIndex].value;
//     // const name = document.querySelector("#nameInput").value;

//     if(selOption === '') {
//         const name = document.getElementById('name');
//         name.addEventListener('mouseenter', e => {
//               name.style.border = '5px dotted orange';
//               enterEventCount++;
//               animalResult.innerText = `Type your name on this field`;;
//             });
//     }

//     if (selOption === 'enterName') {
//         // alert('enter name')
//         selectedOpt.innerText = ('Your current option is to type your name.');
//         if ( name === "") {
//             alert('please enter your name');
//         } else {                    
//             nameInput.addEventListener('mouseover', e => {
//                  nameOutput.innerText = nameInput.value;
//         });
//     } 
//          if (selOption === 'hoverInput') {
//         // alert('hover input')
//         getNameBtn.disabled = true;
//         getNewNameBtn.disabled = true;
//         selectedOpt.innerText = ('Your current option is to mouse over the input field.');
//         hoverOption.innerText = ('Type your name on the name field to get your spirit animal name');
//         document.getElementById("nameInput");

//     } 
// } 
// }