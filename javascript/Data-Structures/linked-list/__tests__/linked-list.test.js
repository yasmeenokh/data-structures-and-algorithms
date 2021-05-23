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

describe('Linked List Insertion', ()=>{
  let List = new LinkedList;

  it('should successfully add a node to the end of the linked list and Can successfully add multiple nodes to the end of a linked list', ()=>{
    List.insert(1);
    List.append(2);
    List.append(3);
    expect(List.head.value).toBe(1);
    expect(List.head.next.value).toBe(2);
    expect(List.head.next.next.value).toBe(3);
  });
  it('Can successfully insert a node before a node located i the middle of a linked list', ()=>{
    List.insertBefore(2,4);
    expect(List.head.next.value).toBe(4);
    expect(List.head.next.next.value).toBe(2);
  });
  it('Can successfully insert a node before the first node of a linked list', ()=>{
    List.insertBefore(1,5);
    expect(List.head.value).toBe(5);
    expect(List.head.next.value).toBe(1);
  });
  it('Can successfully insert after a node in the middle of the linked list', ()=>{
    List.insertAfter(4,6);
    expect(List.head.next.next.next.value).toBe(6);
    expect(List.head.next.next.value).toBe(4);
  });
  it('Can successfully insert a node after the last node of the linked list', ()=>{
    let List2 = new LinkedList;
    List2.insert(3);
    List2.insert(1);
    List2.insertAfter(3,5);
    expect(List2.head.value).toBe(1);
    expect(List2.head.next.value).toBe(3);
    expect(List2.head.next.next.value).toBe(5);
  });
});

