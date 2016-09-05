app.controller('videoListController', function($scope,$http){
  $scope.view = {};

  $http({
    method: 'GET',
    url: '/videolist'
  })
  .then(function(data){
    console.log(data);
    $scope.view.videos = data.data;
  });
});
