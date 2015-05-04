'use strict';

define(['js/app'], function (app) {

    var injectParams = ['$scope'];

    var bank_controller = function ($scope) {
    	$scope.showHeader = true;
		$scope.show2ndFooter = true;
        
    };

    bank_controller.$inject = injectParams;

    app.register.controller('bank_controller', bank_controller);

});
