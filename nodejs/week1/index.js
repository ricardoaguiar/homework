const express = require('express');
const app = express();
const footer = require('./footer');
const contact = require('./contact/contact');
const head = require('./head');

app.get('/index.html', (req, res) => {
    res.send('hello index.html')
});

app.get('/', (req, res) => {
    res.send(`
${head()}
<body>
        <h1>Hello, I'm Ricardo</h1>
        <h2>a web developer in constant development</h2>
        ${contact()}
        ${footer(`this is the footer`)}
    </body>
    `);
});


app.listen(8000);