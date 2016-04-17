'use strict';
app.controller('accountController', ['$scope', '$location', 'accountService', 'ngDialog', function ($scope, $location, accountService, ngDialog) {

    $scope.userInformation = {
        userName: "",
        information: "",
        imagePath: "",
        balance: ""
    };

    $scope.message = "";

  
var users = 
    [
        { name: "Андрей",  description: "1234@gmail.com", money: "1024"},
        { name: "Антон", description: "2345@gmail.com", money: "3.4" },
        { name: "Дмитрий", description: "3456@gmail.com", money: "359" },
        { name: "Твоя мама", description: "milf@g.com", money: "69" }
    ]
;
  
        $scope.listUsers = users;
       // $scope.addItem = function (userName, information, balance) {
      
   // };
    

        var tasks =
        [
            { name: "task1", description: "eat keepchuk", countMoney: "100500" },
            { name: "task2", description: "drink vodka", countMoney: "6000000" },
            { name: "task3", description: "make sense", countMoney: "123456" },
       ]
    ;
       $scope.listTasks = tasks;
 


}]);
