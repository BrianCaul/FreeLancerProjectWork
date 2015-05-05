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

			//Definition of routes to load.
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
            //On route change method , fires when a new page is loaded in order to determine which headers/footers to hide or show
            $rootScope.$on("$routeChangeStart", function (event, next, current) {
			
				var currentPath = $location.path();
			
					if(currentPath==='/order/pick1' || currentPath==='/order/pick2' || currentPath==='/order/details'){
						$rootScope.hideStuff= false;
					}else{
						$rootScope.hideStuff= true;
					}

            });

    }]);
    
    return app;

});





