'use strict';

define(['js/app'], function(app) {

    var injectParams = ['$scope', '$rootScope'];

    var company_controller = function($scope, $rootScope) {
    
    };

    company_controller.$inject = injectParams;

    app.register.controller('company_controller', company_controller);

});