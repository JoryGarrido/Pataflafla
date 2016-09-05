app.directive('pffHeader', function(){
  var headerController = function($scope){
    $scope.home = function(){
      location.assign('/#/');
    }
    $scope.postPage = function(){
      location.assign('/#/videopost');
    }
    $scope.videoList = function(){
      location.assign('/#/videolist');
    }
  }
  return{
    templateUrl:
    'shared/header/headerView.html',
    controller: headerController
  }
});
