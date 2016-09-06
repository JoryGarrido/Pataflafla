app.controller('singleVideoPageController', function($scope,$location,$http,$sce){
  $scope.view = {};

  var arr = location.href.split('video/');
  console.log(arr);
  $http({
    method: 'GET',
    url: 'api/video/' + arr[1]
  })
  .then(function(data){
    $scope.view.title = data.data[0].name;
    $scope.view.description = data.data[0].description;
    $scope.view.videoUrl = data.data[0].video_url;
    var urlArr = $scope.view.videoUrl.split('=');
    $scope.url = "https://youtube.com/embed/" + urlArr[1];
    $scope.view.trustSrc = $sce.trustAsResourceUrl($scope.url);
  });

  var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = '//dasdasda-com.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
  })();
});
