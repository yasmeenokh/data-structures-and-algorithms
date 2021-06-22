'use strict';

module.exports = function quickSort(array, left, right){
  if (array.length < 2){
    return array;
  }
  if(left >= right){
    return;
  }
  let position = partition(array, left, right);

  quickSort(array, left, position-1);
  quickSort(array, position +1, right);
  return array;
}

function partition(array, left, right){
  let pivot = array[right];
  let low = left-1;
  for(let i=left; i <= right; i++){
    if(array[i] <= pivot){
      swap(array, i, ++low);
    }
  }
  return low;
}

function swap(array, i , low){
  let temp = array[i];
  array[i] = array[low];
  array[low]= temp;
}


