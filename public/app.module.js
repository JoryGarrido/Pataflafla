var app = angular.module("diddle", ['ngRoute']);

app.config(function ($httpProvider, $locationProvider) {
  $httpProvider.interceptors.push('jwtInterceptor');
  $locationProvider.html5Mode(true);
})
.service('jwtInterceptor', function jwtInterceptor(){
  return {
    request: function(config){
      if (localStorage.jwt) {
        config.headers.Authorization = 'Bearer ' + localStorage.jwt;
      }
      return config;
    }
  };
});
