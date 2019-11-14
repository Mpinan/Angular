app.controller("myCtrl", function ($scope, $http) {

    $scope.firstName = "";
    $scope.surname = "";
    $scope.test = "test SCOPE (inside ng-app and inside ng-controller)"
    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.surname;
    };

    $scope.quantity = 5;
    $scope.price = 5;

    $scope.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Carl', country: 'Sweden' },
        { name: 'Margareth', country: 'England' },
        { name: 'Hege', country: 'Norway' },
        { name: 'Joe', country: 'Denmark' },
        { name: 'Gustav', country: 'Sweden' },
        { name: 'Birgit', country: 'Denmark' },
        { name: 'Mary', country: 'England' },
        { name: 'Kai', country: 'Norway' }
    ];
    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }

    $http({
        method: 'GET',
        url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9e6a6f4b75ea43608b75773bc958835e',

    }).then(function success(response) {
        // $scope.photo = response.data.articles[0].urlToImage
        $scope.selected = response.data.articles
        // let random = response.data.articles[Math.floor(Math.random() * 10)]
        // $scope.newsTitle = random.title;
        // $scope.news =  random.urlToImage;
        // [Math.floor(Math.random() * 10)].title
        

        console.log(response.data.articles);
        // console.log($scope.photo);
    });
});



app.directive('submitDirective', function () {
    return {
        template: '<button>Submit</button>'
    }
})

