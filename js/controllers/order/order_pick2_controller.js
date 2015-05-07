 'use strict';

define(['js/app'], function(app) {

    var injectParams = ['$scope','$location','$anchorScroll'];

    var order_pick2_controller = function($scope,$location,$anchorScroll) {
      $location.hash('table');
      $anchorScroll();
	  
	
    };

    order_pick2_controller.$inject = injectParams;

    app.register.controller('order_pick2_controller', order_pick2_controller);

});