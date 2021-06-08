'use strict';
const {BinaryTree} = require('../tree');
let FizzBuzzTree= function(tree) {

  if (!tree.root){
    return 'THE TREE IS EMPTY';
  }
  let traverse = (node)=>{
    if (node.value % 3 === 0 && node.value % 5 === 0){
      node.value = 'FizzBuzz';
    } else if (node.value % 3 === 0){
      node.value = 'Fizz';
    } else if (node.value % 5 === 0){
      node.value = 'Buzz';
    } else {
      node.value = `${node.value}`;
    }
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(tree.root);
  return tree;
};

module.exports = FizzBuzzTree;
