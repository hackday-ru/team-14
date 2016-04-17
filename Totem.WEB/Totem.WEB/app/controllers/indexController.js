/// <reference path="indexController.js" />
'use strict';
app.controller('indexController', ['$scope', '$location', 'accountService', 'ngDialog', 'authService', function ($scope, $location, accountService, ngDialog, authService) {

    $scope.authentication = authService.authentication;
    $scope.openRegistrationDialog = function() {
        ngDialog.open({
            template: 'app/views/shared/_registration.html',
            controller: 'registerController',
            className: 'ngdialog-theme-default',
            scope: $scope
        });
    };

    $scope.openLoginDialog = function () {
        ngDialog.open({
            template: 'app/views/shared/_login.html',
            controller: 'loginController',
            className: 'ngdialog-theme-default',
            scope: $scope
        });
    };

    $scope.openTaskDialog = function () {
        ngDialog.open({
            template: 'app/views/shared/_task.html',
            controller: 'taskController',
            className: 'ngdialog-theme-default',
            scope: $scope
        });
    };

}]);
