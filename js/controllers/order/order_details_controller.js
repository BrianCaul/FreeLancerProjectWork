'use strict';

define(['js/app'], function(app) {

    var injectParams = ['$scope'];

    var order_details_controller = function($scope) {
    };

    order_details_controller.$inject = injectParams;

    app.register.controller('order_details_controller', order_details_controller);

});