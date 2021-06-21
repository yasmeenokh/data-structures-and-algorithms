'use strict';

const mergeSort = require('./mergeSort');


describe('MERGE SORT FINCTION TEST', ()=>{
  it('Should be able to sort an even array correctly', ()=>{
    let testArr= [8,4,23,42,16,15];
    expect(mergeSort(testArr)).toEqual([4,8,15,16,23,42]);
  });
  it('Should be able to sort an odd array correctly', ()=>{
    let testArr= [8,4,23,42,16,15,20];
    expect(mergeSort(testArr)).toEqual([4,8,15,16,20,23,42]);
  });
  it('Should be able to reverse a sorted array', ()=>{
    let testArr= [20,18,12,8,5,-2];
    expect(mergeSort(testArr)).toEqual([-2,5,8,12,18,20]);
  });
  it('Should be able to sort an array with few uniques', ()=>{
    let testArr= [5,12,7,5,5,7];
    expect(mergeSort(testArr)).toEqual([5,5,5,7,7,12]);
  });
  it('Should be able to sort an nearly sorted array', ()=>{
    let testArr= [2,3,5,7,13,11];
    expect(mergeSort(testArr)).toEqual([2,3,5,7,11,13]);
  });
});
