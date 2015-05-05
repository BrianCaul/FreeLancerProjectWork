'use strict';

define(['js/routeResolver'], function () {
// Declare app level module which depends on filters, and services
var app = angular.module('globescorpapp', 
        [
        'ngRoute',
        'routeResolverServices',
        'ngCookies',
		"ngTouch",
		"ngSanitize" 
]
).config(['$routeProvider' ,  '$controllerProvider', 'routeResolverProvider',
                '$compileProvider', '$filterProvider', '$provide', '$httpProvider'
                , function($routeProvider,  $controllerProvider, routeResolverProvider,
                  $compileProvider, $filterProvider, $provide, $httpProvider) { 
             app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };
            
            var route = routeResolverProvider.route;


            $routeProvider.when('/login',  route.resolve('login'))
                        .when('/home',  route.resolve('home'))
                        .when('/company',  route.resolve('company'))
                        .when('/bank',  route.resolve('bank'))
                        .when('/about',  route.resolve('about'))
                        .when('/why',  route.resolve('why'))
                        .when('/faq',  route.resolve('faq'))
                        .when('/contact',  route.resolve('contact'))
                        .when('/order/pick1',  route.resolve('order_pick1', 'order/'))
                        .when('/order/pick2',  route.resolve('order_pick2', 'order/'))
                        .when('/order/details', route.resolve('order_details', 'order/'))
                        .otherwise({redirectTo: '/home'});
}]);

    app.run(['$rootScope', '$location',
        function ($rootScope, $location) {
            //Client-side security. Server-side framework MUST add it's 
            //own security as well since client-based security is easily hacked
            $rootScope.$on("$routeChangeStart", function (event, next, current) {

            });

    }]);
    
    return app;

});





