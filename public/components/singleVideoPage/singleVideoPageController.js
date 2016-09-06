app.controller('singleVideoPageController', function($scope,$location,$http,$sce){
  $scope.view = {};
  $scope.disqusConfig = {
    disqus_shortname: 'diddle',
    disqus_identifier: location.href.split('video/')[2],
    disqus_url: location.href.split('video/')[1]
  };

  var arr = location.hash.split('/');
  $http({
    method: 'GET',
    url: 'video/' + arr[2]
  })
  .then(function(data){
    $scope.view.title = data.data[0].name;
    $scope.view.description = data.data[0].description;
    $scope.view.videoUrl = data.data[0].video_url;
    var urlArr = $scope.view.videoUrl.split('=');
    $scope.url = "https://youtube.com/embed/" + urlArr[1];
    $scope.view.trustSrc = $sce.trustAsResourceUrl($scope.url);
  });
});
