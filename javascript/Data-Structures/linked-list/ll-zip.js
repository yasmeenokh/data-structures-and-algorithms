'use strict';

const LinkedList = require('./linked-list.js');

let zipLists = function(list1,list2){
  let zippedList =new LinkedList();
  let linked1 =list1.head;
  let linked2 =list2.head;
  while(linked1||linked2){
    if(linked1){
      zippedList.append(linked1.value);
      linked1=linked1.next;
    }
    if(linked2){
      zippedList.append(linked2.value);
      linked2 =linked2.next;
    }
  }
  return zippedList;
};


module.exports = zipLists;
