﻿require.config({
    baseUrl: ''
});
//Require JS, dynamically add any js libs here
require(
    [
        'js/app',
        'js/routeResolver',
        'js/directives/general_directives',
        'js/filters/general_filters',
        'js/controllers/main_controller'
    ],
    function () {
        angular.bootstrap(document, ['globescorpapp']);
    });
