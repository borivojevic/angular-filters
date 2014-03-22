'use strict';

describe('Capitalize first letter', function() {
  var capitalizeFirstFilter;

  beforeEach(module('borivojevic.filters'));
  beforeEach(inject(function ($filter) {
    capitalizeFirstFilter = $filter('capitalizeFirst');
  }));

  it('should return handle empty strings and non-strings', function() {
    expect(capitalizeFirstFilter('')).toEqual('');
    expect(capitalizeFirstFilter(1)).toEqual('');
    expect(capitalizeFirstFilter({})).toEqual('');
    expect(capitalizeFirstFilter([])).toEqual('');
  });

  it('should return string with first letter capitalized', function() {
    expect(capitalizeFirstFilter('lorem ipsum.')).toEqual('Lorem ipsum.');
  });

});
