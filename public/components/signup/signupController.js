app.controller('signupController', function($scope, $http, $location){
  $scope.view = {};

  $scope.signup = function(){
    $http({
      method: 'POST',
      url: '/signup',
      data: {
        email: $scope.signupEmail,
        password: $scope.signupPassword
      }
    }).then(function successCallback(response) {
      }, function errorCallback(response) {
        console.log(response);
        next();
      });
  }

  $scope.login = function(){
    $http({
      method: 'POST',
      url: '/login',
      data: {
        email: $scope.loginEmail,
        password: $scope.loginPassword
      }
    }).then(function successCallback(response) {
      localStorage.jwt = response.data.token;
      $location.url('/');
      }, function errorCallback(response) {
        console.log(response);
        next();
      });
  }

  $scope.test = function() {
    $http.get('/protected').then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log("ERROR");
    });
  }
});
