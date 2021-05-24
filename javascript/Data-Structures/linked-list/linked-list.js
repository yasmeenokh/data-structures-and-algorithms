'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }
  insert(value){
    let newHead = new Node(value);
    if(!this.head) {
      this.head = newHead;
      this.length++;}
    else {
      newHead.next = this.head;
      this.head = newHead;
      this.length++;
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
  append(value){
    var newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.length++;
    } else {
      let lastNode = this.head;
      while(lastNode.next) lastNode = lastNode.next;
      lastNode.next = newNode;
      this.length++;
    }
  }
  insertBefore(value, newVal){
    var newNode = new Node(newVal);
    if (this.head) {
      let shifted = this.head;
      if (shifted.value === value) {// check the head
        newNode.next = shifted;
        this.head = newNode;
        return;
      }
      while (shifted.next) {
        if (shifted.next.value === value) {
          let temp = shifted.next;
          shifted.next = newNode;
          newNode.next = temp;
          this.length++;
          return shifted.value;
        }
        shifted = shifted.next;
        this.length++;
      }
    }
    return 'The Value You have entered is not included in the linked list';
  }

  insertAfter(value, newVal){
    let newNode = new Node(newVal);
    if (this.head) {
      let shifted = this.head;
      while (shifted) {
        if (shifted.value === value) {
          let temp = shifted.next;
          shifted.next = newNode;
          newNode.next = temp;
          this.length++;
          return;
        }
        shifted = shifted.next;
        this.length++;
      }
    }
    return 'The Value You have entered is not included in the linked list';
  }
  kthFromEnd(k){
    if(k>=this.length || k<0){
      return 'Exception, The value entered is bigger or smaller then the LL';
    }else{
      let position= (this.length-k)-1;
      console.log(`this is the ll length ${this.length}`);console.log(position);
      let requested= this.head;
      console.log(this.head.value);
      for(let i =0;i <this.length;i++){
        if(i === position){
          console.log('rrrrr', requested.value);
          return requested.value;
        }else{
          requested = requested.next;
        }}}

  }}

module.exports = LinkedList;
