var myApp = angular.module("myApp", []);

myApp.controller('showZeta', ["$scope", '$http', '$filter', function($scope, $http, $filter){

    var orderBy = $filter('orderBy');
    $scope.info = {};
    $scope.zetaArray = [];

    //GET
    $scope.getZetas = function(){
        $http.get('/people').then(function(response){
            $scope.zetaArray = response.data;
        });
    };

        //SORT BY
    $scope.order = function(predicate, reverse) {
        $scope.zetaArray = orderBy($scope.zetaArray, predicate, reverse);
    };

$scope.getZetas();

}]);