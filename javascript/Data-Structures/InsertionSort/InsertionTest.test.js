'use strict';

const insertionSort = require('./insertionSort');


describe('Testing The Insertion Sort Function', ()=>{
  it('Should Sort The Array ascendingly', ()=>{
    let array = [8,4,23,42,16,15];
    expect(insertionSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('Should Be Able To Reverse A Sorted array', () => {
    let array = [20,18,12,8,5,-2];
    expect(insertionSort(array)).toEqual([-2,5,8,12,18,20]);
  });
  it('Should Be Able To Sort An Array With Few Uniques', () => {
    let array = [5,12,7,5,5,7];
    expect(insertionSort(array)).toEqual([5,5,5,7,7,12]);
  });
  it('Should Be Able To Sort An Array That is Nearly Sorted', () => {
    let array = [2,3,5,7,13,11];
    expect(insertionSort(array)).toEqual([2,3,5,7,11,13]);
  });


});
