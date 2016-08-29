var knex = require('../db/knex');
var bcrypt = require('bcrypt')

module.exports.signup = function(body){
  var password = bcrypt.hashSync(body.password, 8);

    knex('users')
    .insert({
      email: body.email,
      password: password
    }).then(function(data){
      console.log("success",data);
      return data;
    }).catch(function(e){
      console.log("fail",e);
    });
}

module.exports.getUsers = function(){
  knex('users').then(function(data){
      return data;
  });
}
