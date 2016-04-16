'use strict';
app.controller('loginController', ['$scope', '$location', 'authService', 'ngDialog', function ($scope, $location, authService, ngDialog) {

    $scope.loginData = {
        userName: "",
        password: ""
    };

    $scope.message = "";

    $scope.login = function () {

        authService.login($scope.loginData).then(function (response) {
            ngDialog.close();
        },
         function (err) {
             $scope.message = err.error_description;
         });
    };
}]);
