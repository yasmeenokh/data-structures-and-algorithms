'use strict';

const fizzBuzzTree = require('./fizzBuzz');
const {Node, BinaryTree} = require('../tree');

let four = new Node(4);
let ten = new Node(10);
let two = new Node(9);
let twelve = new Node(15);
let eight = new Node(8);
let three = new Node(3);
let one = new Node(1);

four.left = ten;
four.right = two;
two.left = three;
two.right = one;
ten.left = twelve;
ten.right = eight;
let tree = new BinaryTree(four);
let emptyTree = new BinaryTree();

describe('FizzBuzzTree Test', ()=>{
  it('Should return the number 4 as a string', ()=>{
    let newTree = fizzBuzzTree(tree);
    expect(newTree.root.value).toEqual('4');
  });
  it('Should return the number 10 as buzz', ()=>{
    let newTree = fizzBuzzTree(tree);
    expect(newTree.root.left.value).toEqual('Buzz');
  });
  it('Should return the number 9 as fizz', ()=>{
    let newTree = fizzBuzzTree(tree);
    expect(newTree.root.right.value).toEqual('Fizz');
  });
  it('Should return the number 15 as FizzBuzz', ()=>{
    let newTree = fizzBuzzTree(tree);
    expect(newTree.root.left.left.value).toEqual('FizzBuzz');
  });
  it('Should return a message when the tree is empty', ()=>{
    // let newTree = fizzBuzzTree(tree);
    expect(fizzBuzzTree(emptyTree)).toEqual('THE TREE IS EMPTY');
  });

});
