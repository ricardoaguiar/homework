let c = document.getElementById('canvas');
let ctx = c.getContext('2d');

//Circle
class Circle {
    constructor (x, y, r, startAngle, endAngle, fillColor) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.startAngle = startAngle;
      this.endAngle = endAngle;
      this.fillColor = fillColor;
    }
  
    draw () {
      ctx.beginPath ();
      ctx.arc (
        this.x,
        this.y,
        this.r,
        this.startAngle * Math.PI,
        this.endAngle * Math.PI
      );
      context.fillStyle = this.fillColor;
      context.fill ();
    }
  }