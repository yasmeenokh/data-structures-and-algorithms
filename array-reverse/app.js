'use strict';
let numArray = [1,3,10,7,4,15];

function reverseArr(input) {
  let reversed = [];
  for(let i = input.length-1; i >= 0; i--) {
    reversed.push(input[i]);
  }
  console.log(reversed);
}

reverseArr(numArray);
