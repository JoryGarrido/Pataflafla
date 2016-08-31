var app = angular.module("pataflafla", ['ngRoute']);

app.config(function ($httpProvider) {

  $httpProvider.interceptors.push('jwtInterceptor');

  // states of ui-router




})
.service('jwtInterceptor', function jwtInterceptor(){
  //TODO: Attach the token to every request.
  return {
    request: function(config){
      console.log("config", config);
      console.log('local storage', localStorage.jwt);
      if (localStorage.jwt) {
        console.log('ASSIGNING TOKEN TO REQUEST');
        config.headers.Authorization = 'Bearer ' + localStorage.jwt;

        // another possibility
        // config.session.sessionToken = 'Bearer ' + localStorage.jwt;
      }
      return config;
    }
  };
})
