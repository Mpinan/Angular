
app.controller("myCtrl", function($scope) {

    $scope.firstName = "";
    $scope.lastName = "Doe";
    $scope.quantity = "1"
    $scope.price = "1"
    
    $scope.names = ['Jani','Hege', 'firstName']

});


app.directive('submitDirective', function(){
    return {
        template: '<button>Submit</button>'
    }
})

