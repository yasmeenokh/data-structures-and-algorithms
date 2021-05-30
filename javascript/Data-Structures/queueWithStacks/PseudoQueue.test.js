'use strict';

const {Node,Stack,PseudoQueue} = require('./PseudoQueue');
const list = new PseudoQueue();

describe('PseudoQueue Class Test', ()=>{
  it('Should  successfully instantiate an PseudoQueue', ()=>{
    expect(list.firstStack.top).toBeNull();
    expect(list.secondStack.top).toBeNull();
  });
  it('Should successfully add to the firstStack following FIFO role', ()=>{
    list.enqueue(1);
    list.enqueue(2);
    list.enqueue(3);
    expect(list.firstStack.top.value).toBe(3);
    expect(list.firstStack.top.next.value).toBe(2);
    expect(list.secondStack.top).toBeNull();
    expect(list.firstStack.peek().value).toBe(3);
  });
  it('Should successfully delete from the firstStack following FIFO role ', ()=>{
    list.dequeue();
    expect(list.firstStack.peek().value).toBe(3);
    expect(list.firstStack.top.value).toBe(3);
    expect(list.firstStack.top.next.value).toBe(2);
    expect(list.firstStack.top.next.next).toBeNull();
  });
  it('Should throw an error if dequeue on an empty  stack', ()=>{
    const list2 = new PseudoQueue;
    expect(list2.dequeue()).toEqual('Exception The Stack Is Empty');
  });
  it('Should successfully empty the stack', ()=>{
    list.dequeue();
    list.dequeue();
    expect(list.firstStack.peek()).toBeNull;
    expect(list.dequeue()).toEqual('Exception The Stack Is Empty');
  });

});
