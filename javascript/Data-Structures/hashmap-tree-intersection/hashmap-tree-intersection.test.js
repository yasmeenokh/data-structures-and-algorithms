'use strict';

const {BinaryTree, Node} = require('../tree/tree');
const treeIntersection = require('./hashmap-tree-intersection');

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
let tree = new BinaryTree(four);

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);

a.left = b;
a.right= c;
b.left= d;

let tree2 = new BinaryTree(a);

let j = new Node(10);
let f = new Node(12);
let g = new Node(8);
let h = new Node (7);

g.left = h;
g.right = f;
f.right = j;


let tree3 = new BinaryTree(g);

describe('HashMap Tree Intersection Test', ()=>{
  it('Should be able to return an array of the intersected values', ()=>{
    expect(treeIntersection(tree,tree2)).toEqual([4, 2, 1, 3]);
  });
  it('Should be able to return An Exception if no intersection', ()=>{
    expect(treeIntersection(tree3,tree2)).toEqual('The Trees Are Not Intersected');
  });
  it('Should be able to return an array of the intersected values', ()=>{
    expect(treeIntersection(tree,tree3)).toEqual([8,12,10]);
  });
});
