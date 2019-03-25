const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/fuck', (req, res) => {
    res.send('Dit me may');
});

app.get('/fuck/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + ": " + req.params.age);
});

app.listen(3000);
console.log('Listening at port 3000');