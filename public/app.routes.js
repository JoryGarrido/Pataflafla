app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'components/landing/landingView.html',
      controller: 'landingController'
    })
    .when('/user/signup', {
      templateUrl: 'components/signup/signupView.html',
      controller: 'signupController'
    })
    .when('/user/login', {
      templateUrl: 'components/login/loginView.html',
      controller: 'signupController'
    })
    .when('/videopost', {
      templateUrl: 'components/videopost/videopostView.html',
      controller: 'videopostController'
    })
    .when('/video/:id', {
      templateUrl: 'components/singleVideoPage/singleVideoPageView.html',
      controller: 'singleVideoPageController'
    })
    .when('/videolist', {
      templateUrl: 'components/videoList/videoListView.html',
      controller: 'videoListController'
    });
});
