'use strict';

define(['js/app'], function (app) {

    var injectParams = ['$scope','$location'];

    var faq_controller = function ($scope, $location) {
		$scope.showHeader = true;
		$scope.show2ndFooter = true;
    };

    faq_controller.$inject = injectParams;

    app.register.controller('faq_controller', faq_controller);

});
