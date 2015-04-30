'use strict';

define(['js/app'], function (app) {

    var injectParams = ['$scope', '$rootScope','$location'];

    var main_controller = function ($scope, $rootScope, $location) {
             
		$scope.showHeader = true;
		$scope.show2ndFooter = true;

	};
    main_controller.$inject = injectParams;

    app.controller('main_controller', main_controller);

});
