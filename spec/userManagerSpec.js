var userManager = require('../lib/userManager.js');
var user = {
    email: "john@bob.com",
    password: "password"
}

describe('userManager.signup', function(){
  beforeEach(function(done) {
      setTimeout(function() {
        value = 0;
        done();
      }, 1);
    });

  it('has signup function', function(){
    expect(typeof userManager.signup).toEqual('function');
  });
  it('successfully signs up a user', function(){
    // expect(userManager.signup(user).toEqual(undefined));
  });
});

// describe('userManager.getUsers', function(){
//   beforeEach(function(done) {
//     console.log(done);
//       setTimeout(function() {
//         value = 0;
//         done();
//       }, 1);
//     });
//
//   it('has a getUsers function', function(){
//     expect(typeof userManager.getUsers).toEqual('function');
//   })
//   it('gets all users successfully', function(){
//     // expect(userManager.getUsers).toEqual('sdf');
//   })
// });

describe('userManager.login', function(){
  it('has a login function', function(){
    expect(typeof userManager.login).toEqual('function');
  })
  it('signs a token to the user', function(){
    expect(userManager.login().then(function(data){
      if(data.data.token === PROCESS.env.secret);
    })).toEqual(true);
  })
})
