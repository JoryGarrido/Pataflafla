require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var bearerToken = require('express-bearer-token');
var jwt = require('jsonwebtoken');

var videoManager = require('./lib/videoManager.js');
var userManager = require('./lib/userManager.js');

var app = express();

app.use(bearerToken());

app.use(function (req,res,next) {
  if (req.token) {
    req.decoded = jwt.decode(req.token);
    next();
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.post('/signup', userManager.signup);
app.post('/login', userManager.login);
app.get('/video/:id', videoManager.getVideoById);
app.get('/videolist', videoManager.getAllVideos);

app.use(userManager.verify);

app.post('/videopost', videoManager.upload);


//TEST
app.get('/protected',function (req,res,next) {
  res.send("Identity Confirmed!");
});





app.listen(process.env.PORT || 3000);
