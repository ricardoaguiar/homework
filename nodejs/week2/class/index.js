const express = require('express');
const app = express();
const footer = require('./footer');
const contact = require('../contact/contact');
const education = require('../education/education');
const head = require('./head');

app.use(function(req, res, next) {
  res.locals.ua = req.get("User-Agent");
  console.log(res.locals.ua)
  next();
});


app.get('/index.html', (req, res) => {
    res.send('hello index.html')
});


app.get('/', (req, res) => {
    const university = req.query.university;
    const birthCountry = req.query.birthCountry;
    res.send(`
${head()}
    <body class="container border">
        <h1>Hello, I'm Ricardo</h1>
        <h2>a web developer in constant development</h2>
        ${contact()}
        ${education()}
        ${university}
        ${birthCountry}
        ${footer(`this is the footer`)}
    </body>
    `);
});

app.get('/education', (req, res) => {
    const university = req.query.university;
    res.send({university})
});



app.listen(8000);