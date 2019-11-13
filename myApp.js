const app = angular.module("myApp", []);
app.run(function($rootScope, $interval){
    $rootScope.test = "test root SCOPE(inside ng-app outside ng-controller)"

    $rootScope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $rootScope.theTime = new Date().toLocaleTimeString();
    }, 1000);
    
})