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
      console.log('RESPONSE SIGNUP',response);
      }, function errorCallback(response) {
        console.log(response);
      });
  }
  $scope.login = function(){
    $http({
      method: 'GET',
      url: '/login',
      data: {
        email: $scope.loginEmail,
      }
    }).then(function successCallback(response) {
      localStorage.jwt = response.data.token;
      console.log("SUCCESS RESPONSE",response);
      }, function errorCallback(response) {
        console.log("error response",response);
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
