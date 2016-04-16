
var app = angular.module('totem', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'ngDialog']);

app.config(function ($routeProvider) {

    $routeProvider.when("/index", {
        controller: "indexController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.otherwise({ redirectTo: "/index" });

});

var serviceBase = 'http://localhost:65347/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);


