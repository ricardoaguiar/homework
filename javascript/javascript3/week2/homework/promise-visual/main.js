//select the target li
const span = document.querySelector ('span');
const redCircle = document.querySelector ('ul.marks li:nth-child(1)');
const greenCircle = document.querySelector ('ul.marks li:nth-child(2)');
const blueCircle = document.querySelector ('ul.marks li:nth-child(3)');

//target x/y li positions / top 20 for green / right 20 for red / bottom 300 for red & blue / left 400 for blue & green
const positions = {top: 20, right: 20, bottom: 300, left: 400};

//align the x/y positions of each li elements

const targets = {
  red: {
    x: positions.right - parseInt (redCircle.style.left),
    y: positions.bottom - parseInt (redCircle.style.top),
  },
  blue: {
    x: positions.left - parseInt (blueCircle.style.left),
    y: positions.top - parseInt (blueCircle.style.top),
  },
  green: {
    x: positions.left - parseInt (greenCircle.style.left),
    y: positions.bottom - parseInt (greenCircle.style.top),
  },
};


//all at once with a 1s delay
function translateAllAtOnce () {
  setTimeout (() => {
    let redPromise = moveElement (redCircle, targets.red);
    let bluePromise = moveElement (blueCircle, targets.blue);
    let greenPromise = moveElement (greenCircle, targets.green);
    Promise.all ([redPromise, bluePromise, greenPromise]);
  }, 1000);
}

//one by one
function translateOneByOne () {
  return new Promise (() => {
    let redPromise = moveElement (redCircle, targets.red)
    .then (() => {
      let bluePromise = moveElement (blueCircle, targets.blue)
    .then (() => {
        let greenPromise = moveElement (greenCircle, targets.green);
      });
    });
  });
}
translateOneByOne ();
