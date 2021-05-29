'use strict';

const Node = require('./node');

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
  isEmpty(){
    if(!this.top) return true;
    else return false;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(value){
    let newNode = new Node(value);
    if(!this.front){
      this.front = newNode;
    } else{
      let current = this.front;
      while(current.next){
        current = current.next;
      }
      current.next = newNode;
    }
  }
  dequeue(){
    if (!this.front) return 'Exception The Queue Is Empty';
    let toBeDeleted = this.front;
    this.front = toBeDeleted.next;
    toBeDeleted.next = null;
    return toBeDeleted.value;
  }
  peek(){
    if (!this.front) return 'Exception The Queue Is Empty';
    return this.front.value;
  }
  isEmpty(){
    if(!this.front) return true;
    else return false;
  }
}
module.exports={
  Stack:Stack,
  Queue:Queue
};
