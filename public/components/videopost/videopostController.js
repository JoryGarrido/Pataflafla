app.controller('videopostController', function($scope, $http, $location){
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
      console.log('VIDEOPOSTED',response);
      Window.location('/video')
      }, function errorCallback(response) {
        console.log(response);
        $location.url('/');
      });
  }
});
