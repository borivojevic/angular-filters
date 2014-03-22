angular.module('borivojevic.filters').
  filter('capitalizeFirst', function() {
    return function(input) {
      if (typeof input !== 'string') {
        return '';
      }
      return input.charAt(0).toUpperCase() + input.substring(1);
    }
  });
