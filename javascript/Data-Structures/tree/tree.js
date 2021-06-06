'use strict';

class Node {
  constructor(value, left = null, right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree{
  constructor(root=null){
    this.root = root;
  }

  preOrder(){
    let result = [];
    let traverse = (node)=>{
      result.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  inOrder(){
    let result = [];
    let traverse = (node)=>{
      if(node.left) traverse(node.left);
      result.push(node.value);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  postOrder(){
    let result = [];
    let traverse = (node)=>{
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
}

class BinarySearchTree{
  constructor(root = null){
    this.root = root;
  }
  add(value){
    let node = new Node(value);
    if(this.root === null){
      this.root = node;
    }
    let traverse = (newNode)=>{
      if(value < newNode.value ){
        if(newNode.left === null){
          newNode.left = node;
        }
        traverse(newNode.left);
      }
      if(value > newNode.value){
        if(newNode.right === null){
          newNode.right = node;
        }
        traverse(newNode.right);
      }
    };
    traverse(this.root);
  }

  contains(value) {
    let root=this.root;
    if(!root) return 'the tree is null';
    while (root) {
      if(value<root.value) root=root.left;
      else if (value>root.value) root=root.right;
      else if(value === root.value) return true;
    }
    return false;
  }
}



module.exports = {
  BinaryTree,
  Node,
  BinarySearchTree,
};
