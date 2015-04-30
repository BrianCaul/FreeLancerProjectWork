'use strict';

define(['js/app'], function(app) {

    var injectParams = ['$cookieStore', '$scope', '$location', ];


    var login_controller = function($cookieStore, $scope, $location) {
	
    };

    login_controller.$inject = injectParams;

    app.register.controller('login_controller', login_controller);

});