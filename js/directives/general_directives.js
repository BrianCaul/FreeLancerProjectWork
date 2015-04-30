'use strict';

define(['js/app'], function(app) {



    function bsHasError() {
        return {
            restrict: "A",
            link: function(scope, element, attrs, ctrl) {
                var input = element.find('input[ng-model]');
                if (input) {
                    scope.$watch(function() {
                        return input.hasClass('ng-invalid');
                    }, function(isInvalid) {
                        element.toggleClass('has-error', isInvalid);
                    });
                }
            }
        };
    };
    function time() {
        return {
            restrict: 'E',
            link: function(scope, el, at) {
                scope.$watch(at.datetime, function(newValue) {
                    if (newValue && newValue != '' && newValue != ' ') {
                        el.text((new Date(newValue.replace(/\s/, 'T'))).toLocaleDateString());
                    }
                });

            }
        };
    };

    app.directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13) {
                    scope.$apply(function() {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });

    app.directive('isActiveNav', ['$location', function($location) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                scope.location = $location;
                scope.$watch('location.path()', function(currentPath) {
                  if ('#'+currentPath === element[0].children[0].attributes['href'].value) {
                      element.addClass('active');
                  } else {
                      element.removeClass('active');
                  }
                });
            }
        };
    }]);

   
    app.directive('time', time);
    app.directive('bsHasError', bsHasError);
});