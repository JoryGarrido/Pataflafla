var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


module.exports.signup = function(req,res,next){
  var password = bcrypt.hashSync(req.body.password, 8);

    knex('users')
    .insert({
      email: req.body.email,
      password: password
    }).then(function(data){
      return data;
    }).catch(function(e){
      console.log(e);
    });
}

module.exports.login = function (req,res,next) {
  console.log('token received on login',req.token);
  var user = {
    name: req.body.email,
  }
  res.send({token:jwt.sign(user,process.env.SECRET)});
};

// module.exports.getUsers = function(){
//   knex('users').then(function(data){
//       return data;
//   });
// }
