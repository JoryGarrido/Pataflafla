var userManager = require('../lib/userManager.js');
var user = {
    email: "bob@bob.com",
    password: "password"
}

describe('userManager.signup', function(){
  it('has signup function', function(){
    expect(typeof userManager.signup).toEqual('function');
  });

  it('successfully signs up a user', function(){
    expect(userManager.signup(user).toEqual(true));
  });
});

xdescribe('userManager.getUsers', function(){
  it('has a getUsers function', function(){
    expect(typeof userManager.getUsers).toEqual('function');
  })
  it('gets all users successfully', function(){
    expect(userManager.getUsers()).toEqual('is this right?');
  })
});
