var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



module.exports.signup = function(req,res,next){
  var password = bcrypt.hashSync(req.body.password, 8);

    knex('users')
    .insert({
      email: req.body.email.toLowerCase(),
      password: password
    }).then(function(data){
      return data;
    }).catch(function(e){
      // console.log(e);
    });
}

module.exports.login = function (req,res,next) {
  console.log('token received on login',req.body);
  knex('users')
    .where({email: req.body.email})
    .first()
    .then(function(data) {
      console.log('data', data);
      var user = {
        id: data.id,
        name: data.email
      }
      if (!data) {
        console.log("Email is incorrect");
        res.status(400).send();
      }
      if (bcrypt.compareSync(req.body.password, data.password)) {
        console.log("Password correct");
        res.send({token:jwt.sign(user,process.env.SECRET)});
      } else {
        console.log("Password incorrect");
        res.status(400).send();
      }
    })
    .catch(function(e){
      // console.log(e);
      next(e);
    });
};

module.exports.verify = function (req,res,next) {
  jwt.verify(req.token, process.env.SECRET, function (err,decoded) {
    if (!err) {
      next();
    } else {
      // console.log(err);
      res.status(400).send('Bad Request');
    }
  });

  module.exports.signout = function (req,res,next) {
    localStorage.removeItem("jwt");
  }
};
