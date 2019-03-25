const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const people = require('./routes/people');
app.use('/people', people);

app.listen(3322);
console.log('Listening on port 3322');