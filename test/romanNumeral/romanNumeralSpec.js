'use strict';

describe('Converting arabic numbers to roma numerals', function() {
  var romanNumeralFilter;

  beforeEach(module('borivojevic.filters'));
  beforeEach(inject(function ($filter) {
    romanNumeralFilter = $filter('romanNumeral');
  }));

  it('should return empty string for 0', function() {
    expect(romanNumeralFilter(0)).toEqual('');
  });

  it('should return convert arabic into roman number', function() {
    var conversions = {
      1: 'I',
      2: 'II',
      4: 'IV',
      5: 'V',
      6: 'VI',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      60: 'LX',
      90: 'XC',
      100: 'C',
      110: 'CX',
      400: 'CD',
      500: 'D',
      600: 'DC',
      900: 'CM',
      1000: 'M',
      1100: 'MC',
      3497: 'MMMCDXCVII',
      1987: 'MCMLXXXVII'
    };
    Object.keys(conversions).forEach(function(arabic) {
      var roman = romanNumeralFilter(arabic);
      expect(roman).toEqual(conversions[arabic]);
    });
  });

});
