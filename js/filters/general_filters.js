'use strict';

define(['js/app'], function (app) {

  app.filter('dateToISO', function() {
  return function(input) {
    if(!input || input == '' || input == ' '){
      input = 'Unknown';
    }else{      
        input = new Date(input).toISOString();
    }
    return input;
  };
 });

});
