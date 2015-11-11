myApp.directive('zetaInfo',
    function(){
        return {
            restrict: "E",
            scope: {
                info: "="
            },
            templateUrl: "assets/views/zeta.html"
        }
    }
);