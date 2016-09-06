app.controller('videoListController', function($scope,$http){
  $scope.view = {};
  $scope.goToVid = function(id){
    var arr = id.split('=');
    location.assign('/#/video/' + arr[1]);
  }

  $http({
    method: 'GET',
    url: 'api/videolist'
  })
  .then(function(data){
    $scope.view.videos = data.data;
  });
});
