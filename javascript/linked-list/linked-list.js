'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }
  insert(value){
    let newHead = new Node(value);
    if(!this.head) this.head = newHead;
    else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }
  includes(value){
    if(this.head){
      let testNode = this.head;
      if(testNode.value === value) return true;
      if (testNode.next){
        testNode= testNode.next;
        if(testNode === value) return true;
      }
    } return false;
  }
  toString() {
    let stringedList = '';
    if (!this.head) stringedList = 'The Linked List Is Still Empty';
    else {
      let stringed = this.head;
      stringedList = `{ ${stringed.value} } -> `;
      while (stringed.next) {
        stringed = stringed.next;
        stringedList += `{ ${stringed.value} } -> `;
      }
      stringedList += `NULL`;
    }
    return stringedList;
  }
}

module.exports = LinkedList;
