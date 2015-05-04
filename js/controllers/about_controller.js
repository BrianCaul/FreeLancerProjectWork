'use strict';

define(['js/app'], function (app) {

    var injectParams = ['$scope'];

    var about_controller = function ($scope) {
    	$scope.showHeader = true;
		$scope.show2ndFooter = true;
       
  
	};
    about_controller.$inject = injectParams;

    app.controller('about_controller', about_controller);

});
