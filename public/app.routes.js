app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'components/landing/landingView.html',
      controller: 'landingController'
    });
});
