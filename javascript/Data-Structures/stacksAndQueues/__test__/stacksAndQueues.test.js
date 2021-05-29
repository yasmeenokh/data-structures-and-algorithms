'use strict';

const Node = require('../node');
const {Stack , Queue} = require('../stacks-and-queues');
let stack = new Stack();
let queue = new Queue();

describe('Stack test', ()=>{
  it('Can successfully instantiate an empty stack', ()=>{
    expect(stack.top).toBeNull();
  });
  it('Calling pop or peek on empty stack raises exception', ()=>{
    expect(stack.pop()).toEqual('Exception The Stack Is Empty');
    expect(stack.peek()).toEqual('Exception The Stack Is Empty');
  });
  it('Can successfully push onto a stack', ()=>{
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
    expect(stack.isEmpty()).toEqual(false);

  });
  it('Can successfully pop off the stack',()=>{
    expect(stack.pop()).toEqual(3);
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
  });
  it('Can successfully peek the next item on the stack ', ()=>{
    expect(stack.peek().value).toBe(2);
  });
  it('Can successfully empty a stack after multiple pops', ()=>{
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual('Exception The Stack Is Empty');
    expect(stack.isEmpty()).toEqual(true);
  });
});


describe('Queue test', ()=>{
  it('Can successfully instantiate an empty queue ', ()=>{
    expect(queue.front).toBeNull();
  });
  it('Calling pop or peek on empty stack raises exception', ()=>{
    expect(queue.dequeue()).toEqual('Exception The Queue Is Empty');
    expect(queue.peek()).toEqual('Exception The Queue Is Empty');
  });
  it('Can successfully push onto a stack', ()=>{
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
    expect(queue.isEmpty()).toEqual(false);

  });
  it('Can successfully pop off the stack',()=>{
    expect(queue.dequeue()).toEqual(1);
    expect(queue.front.value).toEqual(2);
    expect(queue.front.next.value).toEqual(3);
  });
  it('Can successfully peek the next item on the stack ', ()=>{
    expect(queue.peek()).toBe(2);
  });
  it('Can successfully empty a stack after multiple pops', ()=>{
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual('Exception The Queue Is Empty');
    expect(queue.isEmpty()).toEqual(true);
  });
});
