require('dotenv').config();
var express = require('express');
var videoManager = require('./lib/videoManager.js');
var userManager = require('./lib/userManager.js');
var bodyParser = require('body-parser');


var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/signup', userManager.signup);




app.listen(process.env.PORT || 3000);
