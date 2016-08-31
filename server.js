require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var bearerToken = require('express-bearer-token');
var jwt = require('jsonwebtoken');

var videoManager = require('./lib/videoManager.js');
var userManager = require('./lib/userManager.js');

var app = express();

app.use(bearerToken());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


// app.use(function (req,res,next) {
//   console.log(req.headers);
//   console.log(req.token);
//   jwt.verify(req.token, process.env.SECRET, function (err,decoded) {
//     if (!err) {
//       next();
//     } else {
//       res.status(400).send('Bad Request');
//     }
//   });
// });

app.post('/signup', userManager.signup);
app.get('/login', userManager.login);

app.use(userManager.verify);

app.get('/protected',function (req,res,next) {
  res.send("Identity Confirmed!");
});



app.listen(process.env.PORT || 3000);
