app.directive('pffHeader', function(){
  var headerController = function($scope, $location){
    $scope.home = function($location){
      location.assign('/#/');
    }
  }
  return{
    templateUrl:
    'shared/header/headerView.html',
    controller: headerController
  }
});
