'use strict';

define(['js/app'], function(app) {

    var injectParams = ['$scope', '$rootScope'];

    var company_controller = function($scope, $rootScope) {
    	$scope.showHeader = true;
		$scope.show2ndFooter = true;
    };

    company_controller.$inject = injectParams;

    app.register.controller('company_controller', company_controller);

});