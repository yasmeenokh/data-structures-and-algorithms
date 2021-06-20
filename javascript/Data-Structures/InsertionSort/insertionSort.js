'use strict';

module.exports = function insertionSort(arr){
  for (let i = 1; i< arr.length; i++){
    for(let j =0; j< i; j++){
      if(arr[i] < arr[j]){
        console.log('Before',arr);
        const temp = arr.splice(i,1);
        arr.splice(j,0, temp[0]);
        console.log('After',arr);

      }
    }
  }
  return arr;
};

