'use strict';

let multiBracketValidation = (input) => {
  if(typeof input !== 'string'){
    return 'YOU MUST ENTER A string';
  }
  let stack = [];
  let open = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  let closed = {
    '}': true,
    ']': true,
    ')': true
  };
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
};

module.exports = multiBracketValidation;
