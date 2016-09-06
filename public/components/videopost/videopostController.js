app.controller('videopostController', function($scope, $http, $location){
  $scope.decoded.id = [];
  $scope.videoPost = function (){
    $http({
      method: 'POST',
      url: '/videopost',
      data: {
        title: $scope.title,
        description: $scope.description,
        video_url: $scope.videoUrl,
        image_url: $scope.imageUrl
      }
    })
    .then(function successCallback(response) {
      Window.location('/video')
      }, function errorCallback(response) {
        $location.url('/');
      });
  }
});
