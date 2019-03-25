const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');

app = express();

//use static folder
app.use(express.static(path.join(__dirname, 'static'), {index: false}));

//read post request
app.use(bodyParser.urlencoded({extended: false}));

//serve main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'inputForm.html'));
});

app.post('/', (req, res) => {
    //set schema for valid email(blue print)
    const schema = joi.object().keys({
        //required: email field is required
        email: joi.string().trim().email().required(),
        password: joi.string().min(5).max(10).required()
    });
    //start validate
    joi.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log('Error here: ', err.details[0].message);
            res.send('an error is occured');
        }
        else{
            console.log('Result: ', result); //request body
            res.send('successfully posted data');
        }
    });
});

app.listen(4000);
console.log('Listening on port 4000');
