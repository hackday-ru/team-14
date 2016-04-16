'use strict';
app.controller('accountService', ['$http', 'ngAuthSettings', function ($scope, ngAuthSettings) {
    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var _getUserInformation = function () {
        return $http.get(serviceBase + 'api/account/getUserIngormation', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
            return response;
        });
    };

    $scope.getUserInformation = _getUserInformation;
}]);
