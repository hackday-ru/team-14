'use strict';
app.controller('homeController', ['$scope', '$location', 'accountService', 'ngDialog', function ($scope, $location, accountService, ngDialog) {

    $scope.task = [];

  

        var tasks =
        [
            { id:1, title: "task1", description: "eat keepchuk", countMoney: "100500" },
            { id:2, title: "task2", description: "drink vodka", countMoney: "6000000" },
            { id:3, title: "task3", description: "make sense", countMoney: "123456" },
            { id:4, title: "task4", description: "eat keepchuk", countMoney: "100500" },
            { id:5, title: "task5", description: "drink vodka", countMoney: "6000000" },
            { id:6, title: "task6", description: "make sense", countMoney: "123456" },
            { id:7, title: "task7", description: "eat keepchuk", countMoney: "100500" },
            { id:8, title: "task8", description: "drink vodka", countMoney: "6000000" },
            { id:9, title: "task9", description: "make sense", countMoney: "123456" },
            { id:10, title: "task10", description: "eat keepchuk", countMoney: "100500" },
            { id:11, title: "task11", description: "drink vodka", countMoney: "6000000" },
            { id:12, title: "task12", description: "make sense", countMoney: "123456" },
            { id:13, title: "task13", description: "eat keepchuk", countMoney: "100500" },
            { id:14, title: "task14", description: "drink vodka", countMoney: "6000000" },
            { id:15, title: "task15", description: "make sense", countMoney: "123456" },
       ]
    ;
        $scope.listTasks = chunk(tasks,2);
    $scope.openTaskDialog = function(id) {
        for (var i in tasks) {
            if (tasks.hasOwnProperty(i)) {
                if (tasks[i].id === id)
                    $scope.task = tasks[i];
            }
        }
        ngDialog.open({
            template: 'app/views/shared/_task.html',
            className: 'ngdialog-theme-default',
            scope: $scope
        });
    };



}]);
function chunk(arr, size) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}