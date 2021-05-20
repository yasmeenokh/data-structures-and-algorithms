'use strict';

let numArray = [1,3,10,7,4,15,5];

function insertShiftArray(arr, addedNum) {
  let newArr = [];
  let middle = Math.ceil(arr.length / 2);
  for (let i = 0; i < middle; i++) {
    newArr[i] = arr[i];
  }
  newArr[middle] = addedNum;
  for (let i = middle; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
  }
  return newArr;
}

insertShiftArray(numArray,50);

module.exports = insertShiftArray;
