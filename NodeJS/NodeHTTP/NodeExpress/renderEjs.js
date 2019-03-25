const express = require('express');
const path = require('path');

app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:userName', (req, res) => {
    res.render('index', {data: {userName: req.params.userName, loggedIn: 'True'}});
})

app.listen(7000);
console.log('Serving on port 7000');