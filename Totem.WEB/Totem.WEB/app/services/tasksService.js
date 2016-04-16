'use strict';
app.factory('taskService', ['$http', 'ngAuthSettings', function ($scope, ngAuthSettings) {
    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var taskServiceFactory = [];
/*получает таски, которые создал пользователь*/
    var _getTasks = function () {
        return $http.get(serviceBase + 'api/tasks/', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
            return response;
        });
    };

/*получаем таски для личной страницы в которых участвует пользователь*/
    var _getOtherTasks = function () {
        return $http.get(serviceBase + 'api/tasks/', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
            return response;
        });
    };

    taskServiceFactory.getTasks = _getTasks;
    taskServiceFactory.getOtherTasks = _getOtherTasks;
    return taskServiceFactory;
}]);
