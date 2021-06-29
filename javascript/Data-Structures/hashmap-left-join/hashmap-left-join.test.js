'use strict';

const HashTable = require('../Hashtable/hashtable');
const leftJoin = require('./hashmap-left-join');

let hashTable1 = new HashTable(1024);
let hashTable2 = new HashTable(1024);
let hashTable3 = new HashTable(1024);


hashTable1.add('angry', 'mad');
hashTable1.add('happiness', 'joy');
hashTable1.add('help', 'assist');
hashTable1.add('excited', 'thrilled');

hashTable2.add('excited', 'board');
hashTable2.add('help', 'ignore');
hashTable2.add('sad', 'happiness');
hashTable2.add('agitated', 'calm');


describe('LEFT JOIN FUNCTION TEST', ()=>{
  it('Should be able to return an array with each word and its acronym and synonym',()=>{
    let expected = [
      [ 'excited', 'thrilled', 'board' ],
      [ 'help', 'assist', 'ignore' ],
      [ 'angry', 'mad', null ],
      [ 'happiness', 'joy', null ]
    ];
    expect(leftJoin(hashTable1,hashTable2)).toEqual(expected);
  });
  it('Should be able to return the all of the left side ',()=>{
    let expected = [
      [ 'excited', 'board', 'thrilled' ],
      [ 'agitated', 'calm', null ],
      [ 'sad', 'happiness', null ],
      [ 'help', 'ignore', 'assist' ]
    ];
    expect(leftJoin(hashTable2,hashTable1)).toEqual(expected);
  });
  it('Should be able to return null if the left side is empty ',()=>{
    expect(leftJoin(hashTable3,hashTable1)).toBeNull();
  });
});


