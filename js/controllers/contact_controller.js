'use strict';

define(['js/app'], function (app) {

    var injectParams = ['$scope','$location'];

    var contact_controller = function ($scope, $location) {
          

    };

    contact_controller.$inject = injectParams;

    app.register.controller('contact_controller', contact_controller);

});
