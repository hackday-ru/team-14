'use strict';
app.factory('accountService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {
    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var serviceFactory = [];
    var _getUserInformation = function () {
        return $http.get(serviceBase + 'api/account/getUserIngormation', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
            return response;
        });
    };

    serviceFactory.getUserInformation = _getUserInformation;
    return serviceFactory;
}]);
