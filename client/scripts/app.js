var myApp = angular.module("myApp", []);

myApp.controller('showZeta', ["$scope", '$http', function($scope, $http){
    $scope.info = {};

    $scope.zetaArray = [];

    //GET
    $scope.getZetas = function(){
        $http.get('/people').then(function(response){
            $scope.zetaArray = response.data;
        });
    };

$scope.getZetas();

}]);