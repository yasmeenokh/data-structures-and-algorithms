'use strict';

const {Node, BinaryTree, BinarySearchTree} = require('./tree');

let tree = null;

describe('Binary Tree Test', ()=>{
  beforeAll(()=>{
    let four = new Node(4);
    let ten = new Node(10);
    let two = new Node(2);
    let twelve = new Node(12);
    let eight = new Node(8);
    let three = new Node(3);
    let one = new Node(1);

    four.left = ten;
    four.right = two;
    two.left = three;
    two.right = one;
    ten.left = twelve;
    ten.right = eight;
    tree = new BinaryTree(four);
  });


  it('Should Traverse Tree Using preOrder', ()=>{
    let expected = [4,10,12,8,2,3,1];
    let preOrdered = tree.preOrder();
    expect(preOrdered).toEqual(expected);
  });

  it('Should Traverse Tree Using inOrder', ()=>{
    let expected = [12,10,8,4,3,2,1];
    let inOrdered = tree.inOrder();
    expect(inOrdered).toEqual(expected);
  });
  it('Should Traverse Tree Using postOrder', ()=>{
    let expected = [12,8,10,3,1,2,4];
    let postOrdered = tree.postOrder();
    expect(postOrdered).toEqual(expected);
  });
});

describe('BinarySearchTree TEST', ()=>{
  let tree = new BinarySearchTree();

  it('Should be able to add to the tree in a binary search manner', ()=>{
    tree.add(5);
    tree.add(10);
    tree.add(4);
    console.log(tree);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left).toEqual(4);
    expect(tree.root.right).toEqual(10);
  });

  it('Should be able to tell if a value is within tree or not', ()=>{
    expect(tree.contains(5)).toEqual(true);
    expect(tree.contains(8)).toEqual(false);
  });


});
