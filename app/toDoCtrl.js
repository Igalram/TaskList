app.controller('toDoCtrl', function ($scope, $http, $location, toDoSrv) {
    
  $scope.tasks = toDoSrv.getTaskList();

  $scope.setTask = function () {
    toDoSrv.setTask($scope.newTask);
  }

  
    




});
