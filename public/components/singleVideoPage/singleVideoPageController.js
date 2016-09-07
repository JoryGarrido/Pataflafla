app.controller('singleVideoPageController', function($scope,$location,$http,$sce){
  $scope.view = {};

  var arr = location.href.split('video/');
  $http({
    method: 'GET',
    url: 'api/video/' + arr[1]
  })
  .then(function(data){
    console.log('data', data.data);
    $scope.userId = data.data.data[0].user_id;
    $scope.decoded = data.data.decoded;
    $scope.videoId = data.data.data[0].id;
    $scope.view.title = data.data.data[0].name;
    $scope.view.description = data.data.data[0].description;
    $scope.view.videoUrl = data.data.data[0].video_url;
    var urlArr = $scope.view.videoUrl.split('=');
    $scope.url = "https://youtube.com/embed/" + urlArr[1];
    $scope.view.trustSrc = $sce.trustAsResourceUrl($scope.url);

    if ($scope.decoded.id === $scope.userId) {
      $scope.loggedIn = true;
    } else {
      $scope.loggedIn = false
    }

    findImages();
  });

  function findImages(){
    $http({
      method: 'GET',
      url:'api/images/' + $scope.videoId,
    })
    .then(function(data){
      $scope.showImg = true;
      $scope.view.imgUrl = data.data[0].url;
      console.log($scope.view.imgUrl);
    })
    .catch(function(){
      $scope.showImg = false;
    });
  };

  var disqus_config = function () {
    this.page.url = PAGE_URL;
    this.page.identifier = PAGE_IDENTIFIER;
  };
  (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = '//diddle.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
  })();


  $scope.uploadImage = function(){
    $http({
      method: 'POST',
      url: '/api/uploadimage',
      data: {
        url: $scope.imageUrl,
        video_id: $scope.videoId
      }
    })
    .then(function(){
      return
    });
  };
});
