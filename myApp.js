const app = angular.module("myApp", []);

app.run(function ($rootScope, $interval, $timeout, $location) {
    $rootScope.test = "test root SCOPE(inside ng-app outside ng-controller)"
    $rootScope.myUrl = $location.absUrl()
    $rootScope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $rootScope.theTime = new Date().toLocaleTimeString();
    }, 1000);

    $rootScope.myHeader = "Hello Amigo!";

    $timeout(function () {
        $rootScope.myHeader = "How are you today?";
    }, 4000);

})