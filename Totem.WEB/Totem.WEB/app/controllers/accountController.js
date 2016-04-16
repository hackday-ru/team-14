'use strict';
app.controller('accountController', ['$scope', '$location', 'accountService', 'ngDialog', function ($scope, $location, accountService, ngDialog) {

    $scope.userInformation = {
        userName: "",
        information: "",
        imagePath: "",
        balance: ""
    };

    $scope.message = "";

    accountService.getUserInformation().then(function (result) {
        $scope.userInformation = result.data;
    });
}]);
