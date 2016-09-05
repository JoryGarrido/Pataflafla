app.directive('pffHeader', function(){
  var headerController = function($scope){
    $scope.home = function(){
      location.assign('/#/');
    }
    $scope.postPage = function(){
      location.assign('/#/videopost');
    }
  }
  return{
    templateUrl:
    'shared/header/headerView.html',
    controller: headerController
  }
});
