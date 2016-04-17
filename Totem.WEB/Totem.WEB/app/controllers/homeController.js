'use strict';
app.controller('homeController', ['$scope', '$location', 'accountService', 'ngDialog', function ($scope, $location, accountService, ngDialog) {


  

        var tasks =
        [
            { title: "task1", description: "eat keepchuk", countMoney: "100500" },
            { title: "task2", description: "drink vodka", countMoney: "6000000" },
            { title: "task3", description: "make sense", countMoney: "123456" },
            { title: "task4", description: "eat keepchuk", countMoney: "100500" },
            { title: "task5", description: "drink vodka", countMoney: "6000000" },
            { title: "task6", description: "make sense", countMoney: "123456" },
            { title: "task7", description: "eat keepchuk", countMoney: "100500" },
            { title: "task8", description: "drink vodka", countMoney: "6000000" },
            { title: "task9", description: "make sense", countMoney: "123456" },
            { title: "task10", description: "eat keepchuk", countMoney: "100500" },
            { title: "task11", description: "drink vodka", countMoney: "6000000" },
            { title: "task12", description: "make sense", countMoney: "123456" },
            { title: "task13", description: "eat keepchuk", countMoney: "100500" },
            { title: "task14", description: "drink vodka", countMoney: "6000000" },
            { title: "task15", description: "make sense", countMoney: "123456" },
       ]
    ;
       $scope.listTasks = tasks;
 


}]);
