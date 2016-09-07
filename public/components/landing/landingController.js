app.controller('landingController', function($scope,$http,$location){
  $scope.signup = function(){
    $http({
      method: 'POST',
      url: 'api/signup',
      data: {
        email: $scope.landingEmail,
        password: $scope.landingPassword
      }
    }).then(function successCallback(response) {
      $location.url('/user/login');
      }, function errorCallback(response) {
        $location.url('/user/login');
      });
  }
});
