/**
 *
 * Main directives.js file
 *
 *
 * Functions (directives)
 *  - pageTitle
 *
 */


/**
 * pageTitle - Directive for set Page title - mata title
 */
function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'GlobesCorp - 100% Satisfaction Guarenteed';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'GlobesCorp - 100% Satisfaction Guarenteed | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
};


/**
 *
 * Pass all functions into module
 */
angular
    .module('konnectagainapp')
    .directive('pageTitle', pageTitle)
