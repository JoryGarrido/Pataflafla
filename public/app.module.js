var app = angular.module("diddle", ['ngRoute']);

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('jwtInterceptor');
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
})
