'use strict';
app.controller('registerController', ['$scope', '$location', 'authService', 'ngDialog', function ($scope, $location, authService, ngDialog) {

    $scope.registerData = {
        login: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    $scope.message = "";

    $scope.registration = function () {
        authService.saveRegistration($scope.registerData).then(function (response) {
            ngDialog.closeDialog();
            },
         function (err) {
             $scope.message = err.error_description;
         });
    };
}]);
