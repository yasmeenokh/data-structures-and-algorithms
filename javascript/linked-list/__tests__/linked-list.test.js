'use strict';

const Node = require('../node.js');
const LinkedList = require('../linked-list.js');
let linkedList = new LinkedList;

describe('Linked List file test', ()=>{
  it('Should  successfully instantiate an empty linked list', ()=>{
    expect(linkedList.head).toBeNull();
  });
  it('Should Insert In To The Empty Linked List', ()=>{
    let newValue = 15;
    linkedList.insert(newValue);
    expect(linkedList.head.value).toEqual(newValue);
    expect(linkedList.head.next).toBeNull();
  });
  it('Should assign the head property will properly point to the first node in the linked list', ()=>{
    linkedList.insert(10);
    expect(linkedList.head.value).toEqual(10);
    expect(linkedList.head.next.value).toEqual(15);
    expect(linkedList.head.next.next).toBeNull();
  });
  it('Should if the value is in the linked list or not, return true or false', () => {
    linkedList.insert(12);
    expect(linkedList.includes(12)).toBeTruthy();
    expect(linkedList.includes(21)).toBeFalsy();
  });
  it('Should convert the linked list to string', () => {
    expect(typeof linkedList.toString()).toBe('string');
    expect(linkedList.toString()).toBe('{ 12 } -> { 10 } -> { 15 } -> NULL');
  });
});
