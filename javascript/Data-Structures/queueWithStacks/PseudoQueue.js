'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next= null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }
  push(value){
    let newStack = new Node(value);
    if(!this.top){
      this.top = newStack;
    } else {
      newStack.next = this.top;
      this.top= newStack;
    }
  }
  pop(){
    if(!this.top){
      return 'Exception The Stack Is Empty';
    } else {
      let secondStack = this.top.value;
      this.top= this.top.next;
      return secondStack;
    }
  }
  peek(){
    if(!this.top) return 'Exception The Stack Is Empty';
    else { return this.top;
    }
  }
}

class PseudoQueue{
  constructor(){
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }
  enqueue(value){
    return this.firstStack.push(value);
  }
  dequeue() {
    if(!this.firstStack.top) {
      return 'Exception The Stack Is Empty';
    }
    while(this.firstStack.top.next){
      this.secondStack.push(this.firstStack.pop());
    }
    this.firstStack.pop();
    while(this.secondStack.top){
      this.firstStack.push(this.secondStack.pop());
    }
  }
}


module.exports = {
  Node : Node,
  Stack: Stack,
  PseudoQueue: PseudoQueue,
};
