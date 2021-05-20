'use strict';

const insertShiftArray = require('./app');

describe('Insert Shift Array Test ', ()=>{
  it('should return an array with the input number inserted to the middle of the input EVEN array', ()=>{
    expect(insertShiftArray([1,2,3,4], 5)).toEqual([1,2,5,3,4]);
  });
  it('should return an array with the input number inserted to the middle of the input ODD array', ()=>{
    expect(insertShiftArray([1,2,3,4,5], 6)).toEqual([1,2,3,6,4,5]);
  });

});
