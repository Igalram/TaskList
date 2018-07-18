app.controller('toDoCtrl', function ($scope, $http, $location, toDoSrv) {
    
  $scope.tasks = toDoSrv.getTaskList();

  $scope.mouseOver = false;

  $scope.setTask = function () {
    toDoSrv.setTask($scope.newTask);
  }

  $scope.delTask = function (index) {
    toDoSrv.delTask(index);
    console.log("CTRL: delTask is called");
  }

  $scope.checkTask = function (index) {
    toDoSrv.checkTask(index);
    console.log("CTRL: checkTask is called");
  }

  
    




});
