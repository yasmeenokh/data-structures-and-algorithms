'use strict';
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  if (arr.length === 0) {
    return -1;
  }

  while (start <= end) {
    let index = Math.ceil((start + end) / 2);
    if (val === arr[index]) {
      return index;
    } else if (arr[index] < val) {
      start = index + 1;
    } else if (arr[index] > val) {
      end = index - 1;
    }
  }
  return -1;
}
let testArray = [1,2,45,40,50,70];
binarySearch(testArray, 70);
