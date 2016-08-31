require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var bearerToken = require('express-bearer-token');
var jwt = require('jsonwebtoken');

var videoManager = require('./lib/videoManager.js');
var userManager = require('./lib/userManager.js');

var app = express();

// app.use(bearerToken());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/signup', userManager.signup);
app.get('/login', userManager.login);

app.use(function (req,res,next) {
  console.log('verify', req.headers);
  //TODO: Implement app level middleware to protect the /protected route
  var token = (req.headers.Authorization && req.headers.Authorization.split(' ')[1]);
  console.log('token', token);
  jwt.verify(token, process.env.SECRET, function (err,decoded) {
    if (!err) {
      next();
    } else {
      console.log(err);
      res.status(400).send('Bad Request');
    }
  });
  //TODO: Verify the token before allowing access to /protected
});

app.get('/protected',function (req,res,next) {
  res.send("Identity Confirmed!");
});



app.listen(process.env.PORT || 3000);
