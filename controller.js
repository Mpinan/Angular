
app.controller("myCtrl", function($scope) {

    $scope.firstName = "";
    $scope.surname = "";
    $scope.test = "test SCOPE (inside ng-app and inside ng-controller)"
    $scope.fullName = function(){
        return  $scope.firstName + " " + $scope.surname; 
    };
    $scope.quantity = "1";
    $scope.price = "1";
    
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];

});


app.directive('submitDirective', function(){
    return {
        template: '<button>Submit</button>'
    }
})

