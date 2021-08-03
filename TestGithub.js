var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

    $scope.GetData = function () {
        $scope.Data='MyNameIs Pravesh Kumar'
    }
});
