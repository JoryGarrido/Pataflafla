app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'components/landing/landingView.html',
      controller: 'landingController'
    })
    .when('/signup', {
      templateUrl: 'components/signup/signupView.html',
      controller: 'signupController'
    })
    .when('/videopost', {
      templateUrl: 'components/videopost/videopostView.html',
      controller: 'videopostController'
    });
});

module.exports.upload = function () {
  
}
