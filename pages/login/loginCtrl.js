angular.module('loginModule')
    .controller('loginCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.login = function () {
            if ($scope.userName == "admin" && $scope.password == "123456") {
                  $state.go('main')
            }
           
        }
    }])