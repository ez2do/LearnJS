const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');
const app = express();

//note: js is single thread, so using express to serve static file will occur 1 by 1
//so it lead to slow down the process. Instead, using CDN instead

//first argument is the alias, second is the path (here is the absolute path)
app.use(express.static(path.join(__dirname, 'static')));

//use to read the post request content to server
//it read a form input and store as a object as req.body
app.use(bodyParser.urlencoded({extended: false}));

//read json from post request, it conpare content type from
//the request an decide to read json or urlencoded
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    //database work here
    //...
    res.json({success: true});
})

app.listen(2000);
console.log('Serving on port 2000');