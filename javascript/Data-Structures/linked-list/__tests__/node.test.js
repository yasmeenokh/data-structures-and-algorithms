'use strict';

// Require our linked list implementation
const Node = require('../node');

describe('Linked List Node.js', () => {
  it('Should create new Object', () => {
    let value = 10;
    let node = new Node(value);

    expect(node.value).toEqual(10);
    expect(node.next).toEqual(null);

  });
});
