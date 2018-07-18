app.controller('toDoCtrl', function ($scope, $http, $location, toDoSrv) {
    
  $scope.tasks = toDoSrv.getTaskList();

  $scope.mouseOver = false;

  $scope.setTask = function () {
    toDoSrv.setTask($scope.newTask);
  }

  
    




});
