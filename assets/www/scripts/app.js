// This is a JavaScript file

angular.module('patrimonio24App',[
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'snap'
])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .otherwise({
        redirectTo: '/'
      });
  })  
;