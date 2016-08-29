require('dotenv').config();
var userManager = require('./lib/userManager.js');
var knex = require('../db/knex');

router.post('/signup', function(req, res, next) {
  console.log("Req is",req);
  // userManager.signup(req.body);
});
