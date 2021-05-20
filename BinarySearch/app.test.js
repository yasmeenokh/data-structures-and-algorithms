'use strict';

const binarySearch = require('./app');

describe('Binary Search Test', () => {
  it('It should return a the index of the input if it exists in the input array', () => {
    expect(binarySearch([1,2,4,5,6,7], 4)).toEqual(2);
  });
  it('It should return -1 if the key does not exist in the array', () => {
    expect(binarySearch([1,2,3,4,5,6,7], 8)).toEqual(-1);
  });
});
