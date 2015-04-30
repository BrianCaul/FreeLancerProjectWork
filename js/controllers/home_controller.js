'use strict';

define(['js/app'], function(app) {

            var injectParams = ['$scope', '$location'];

            var home_controller = function($scope, $location) {

            };

                home_controller.$inject = injectParams;

                app.register.controller('home_controller', home_controller);

            });