const app = angular.module("myApp", []);
app.run(function($rootScope){
    $rootScope.test = "test root SCOPE(inside ng-app outside ng-controller)"
})