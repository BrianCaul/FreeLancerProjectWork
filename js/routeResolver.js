﻿'use strict';
//Boilerplate route configuration
define([], function() {

    var routeResolver = function() {

        this.$get = function() {
            return this;
        };

        this.routeConfig = function() {
            var viewsDirectory = 'templates/',
                controllersDirectory = 'js/controllers/',

                setBaseDirectories = function(viewsDir, controllersDir) {
                    viewsDirectory = viewsDir;
                    controllersDirectory = controllersDir;
                },

                getViewsDirectory = function() {
                    return viewsDirectory;
                },

                getControllersDirectory = function() {
                    return controllersDirectory;
                };

            return {
                setBaseDirectories: setBaseDirectories,
                getControllersDirectory: getControllersDirectory,
                getViewsDirectory: getViewsDirectory
            };
        }();

        this.route = function(routeConfig) {
			//section defines how the routes must match to the page names and controller names
			//pages are path/filename.html
			//controllers are path/filename_controller.js 
			
            var resolve = function(baseName, path, secure) {
                    if (!path) path = '';

                    var routeDef = {};
                    routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '.html';
                    routeDef.controller = baseName + '_controller';
                    routeDef.secure = (secure) ? secure : false;
                    routeDef.resolve = {
                        load: ['$q', '$rootScope', function($q, $rootScope) {
                            var dependencies = [routeConfig.getControllersDirectory() + path + baseName + '_controller.js'];
                            return resolveDependencies($q, $rootScope, dependencies);
                        }]
                    };

                    return routeDef;
                },

                resolveDependencies = function($q, $rootScope, dependencies) {
                    var defer = $q.defer();
                    require(dependencies, function() {
                        defer.resolve();
                        $rootScope.$apply()
                    });

                    return defer.promise;
                };

            return {
                resolve: resolve
            }
        }(this.routeConfig);

    };

    var servicesApp = angular.module('routeResolverServices', []);

    //Must be a provider since it will be injected into module.config()    
    servicesApp.provider('routeResolver', routeResolver);
});