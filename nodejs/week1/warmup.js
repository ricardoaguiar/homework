
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
<body>
        <h1>Hello, I'm Ricardo</h1>
        <h2>a web developer in constant development</h2>
    </body>
    `);
});


class Circle {
 constructor(radius) {
     this.radius = radius;
 }

    getDiameter() {
        return 2 * this.radius;
    }

    getCircumference() {

        return 2*Math.PI * this.radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle10 = new Circle(10);
const circle20 = new Circle(20);

console.log(circle10.getDiameter());
console.log(circle20.getDiameter());
console.log(circle10.getArea());
console.log(circle20.getArea());
console.log(circle10.getCircumference());
console.log(circle20.getCircumference());


app.listen(5000);