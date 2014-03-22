angular.module('borivojevic.filters').
  filter('romanNumeral', function() {
    return function(number) {
      var result = '';
      var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

      if (number < 1) {
        return result;
      }

      while (number > 0) {
        arabic.forEach(function(div, i) {
          var res = Math.floor(number / div);
          if (res >= 1) {
            result = result + Array(res+1).join(roman[i]);
            number = number % div;
          }
        });
      }

      return result;
    }
  });
