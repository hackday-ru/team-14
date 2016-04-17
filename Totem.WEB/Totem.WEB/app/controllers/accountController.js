'use strict';
app.controller('accountController', [
    '$scope', '$location', 'accountService', 'ngDialog', function($scope, $location, accountService, ngDialog) {

        $scope.userInformation = {
            userName: "",
            information: "",
            imagePath: "",
            balance: ""
        };
        var users =
        [
            { name: "Андрей", description: "1234@gmail.com", money: "1024" },
            { name: "Антон", description: "2345@gmail.com", money: "3.4" },
            { name: "Дмитрий", description: "3456@gmail.com", money: "359" },
            { name: "Твоя мама", description: "milf@g.com", money: "69" }
        ];

        $scope.currentUser = users[0];
        $scope.message = "";
        $scope.task = {
            name: "",
            description: "",
            countMoney: ""
        };


        $scope.listUsers = users;


        var tasks =
        [
            { name: "task1", description: "eat keepchuk", countMoney: "100500" },
            { name: "task2", description: "drink vodka", countMoney: "6000000" },
            { name: "task3", description: "make sense", countMoney: "123456" }
        ];
        $scope.listTasks = tasks;
        $scope.addMoney= function(money) {
            $scope.currentUser.money += money;
            ngDialog.close();
        }

        $scope.addMoneyDialog = function (money) {
            ngDialog.open({
                template: 'app/views/shared/_addMoney.html',
                className: 'ngdialog-theme-default',
                scope: $scope
            });
        }

        $scope.addTask = function () {
            $scope.listTasks.push($scope.task);
            ngDialog.close();
        }

        $scope.addTaskDialog = function (money) {
            ngDialog.open({
                template: 'app/views/shared/_addTask.html',
                className: 'ngdialog-theme-default',
                scope: $scope
            });
        }
    }
]);