/**
*/

'use strict';

angular.module('myApp').controller('LoginCtrl', [
    '$scope', '$state','$stateParams','loginService','$http','$timeout','dpaConstants'
    ,function($scope, $state, $stateParams,loginService,$http,$timeout,Constants) {
  //TODO - put any directive code here

  // Expose $state and $stateParams to the <body> tag
  $scope.$state = $state;
  $scope.$stateParams = $stateParams;

  // loginService exposed and a new Object containing login user/pwd
  $scope.ls = loginService;
  $scope.login = {
    working: false,
  wrong: false
  };
  $scope.loginMe = function () {
    // setup promise, and 'working' flag
    var loginPromise = $http.post(Constants.urls.login, $scope.login);
    $scope.login.working = true;
    $scope.login.wrong = false;

    loginService.loginUser(loginPromise);
    loginPromise.error(function () {
      $scope.login.wrong = true;
      $timeout(function () { $scope.login.wrong = false; }, 8000);
    });
    loginPromise.finally(function () {
      $scope.login.working = false;
    });
  };
  $scope.logoutMe = function () {
    loginService.logoutUser($http.get(Constants.urls.logout));
  };
}]);
