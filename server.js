require('dotenv').config();
var express = require('express');
var videoManager = require('./lib/videoManager.js');
var userManager = require('./lib/userManager.js');

var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000);

app.post('/signup', userManager.signup);
