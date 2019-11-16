
document.addEventListener("DOMContentLoaded", function(event) {


const btn = document.querySelector("#btnCounter");
const delayedBtn = document.querySelector("#delayedBtn");

let clicks = 0;
btn.addEventListener("click", countClicks);

function countClicks() {
  clicks += 1;
  console.log(clicks);
}

delayedBtn.addEventListener("click", clicked);

function clicked() {
  setTimeout(() => {
    console.log("The button was clicked after 5 seconds");
  }, 5000);
}


  console.log("DOM fully loaded and parsed");
});
