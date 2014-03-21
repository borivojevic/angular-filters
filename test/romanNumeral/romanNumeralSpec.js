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
});
