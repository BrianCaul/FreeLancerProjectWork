'use strict';

define(['js/app'], function (app) {

    var injectParams = ['$scope','$location'];

    var why_controller = function ($scope, $location) {
          $scope.showHeader = true;
		$scope.show2ndFooter = true; 
    };

    why_controller.$inject = injectParams;

    app.register.controller('why_controller', why_controller);

});
