'use strict';

define(['js/app'], function (app) {

    var injectParams = ['$scope','$location'];

    var faq_controller = function ($scope, $location) {
	
    };

    faq_controller.$inject = injectParams;

    app.register.controller('faq_controller', faq_controller);

});
