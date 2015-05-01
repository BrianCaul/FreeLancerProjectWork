'use strict';

define(['js/app'], function (app) {

    var injectParams = ['$scope'];

    var order_pick1_controller = function($scope) {
	    $scope.showHeader = false;
		$scope.show2ndFooter = false;
    };

    order_pick1_controller.$inject = injectParams;

    app.register.controller('order_pick1_controller', order_pick1_controller);

});