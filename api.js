require('dotenv').config();
var userManager = require('./lib/userManager.js');
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.post('/signup', function(req, res, next) {
  userManager.signup(req.body);
});
