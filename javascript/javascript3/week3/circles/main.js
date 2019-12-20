let c = document.getElementById ('canvas');
let ctx = c.getContext ('2d');

//Circle
class Circle {
  constructor (x, y, r, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.fillColor = fillColor;
  }

  draw () {
    ctx.beginPath ();
    ctx.arc (this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = this.fillColor;
    ctx.fill ();
    ctx.stroke ();
  }
}

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

function drawRandom (min, max) {
  let a = Math.random () * (max - min) + min;
  return Math.round (a);
}
setInterval (() => {
  let randomX = drawRandom (0, 1000);
  let randomY = drawRandom (0, 1000);
  let randomR = drawRandom (0, 80);
  let color = drawRandom()
  let c = new Circle (
    randomX,
    randomY,
    randomR,
    color = '#'+Math.floor(Math.random()*16777215).toString(16)
  );
  c.draw ();
}, 100);
