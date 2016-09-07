require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var bearerToken = require('express-bearer-token');
var jwt = require('jsonwebtoken');

var videoManager = require('./lib/videoManager.js');
var userManager = require('./lib/userManager.js');
var imageManager = require('./lib/imageManager.js');

var app = express();

app.use(bearerToken());

app.use(function (req,res,next) {
  if (req.token) {
    req.decoded = jwt.decode(req.token);
    console.log('decode', req.decoded);
    next();
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));



app.post('/api/signup', userManager.signup);
app.post('/api/login', userManager.login);
app.get('/api/video/:id', videoManager.getVideoById);
app.get('/api/videolist', videoManager.getAllVideos);
app.post('/api/uploadimage', imageManager.upload);
app.get('/api/images/:id', imageManager.getImages)
app.all('/*', function(req,res,next){
  res.redirect('/#' + req.url);
});

app.use(userManager.verify);

app.post('/api/videopost', videoManager.upload);




app.listen(process.env.PORT || 3000);
