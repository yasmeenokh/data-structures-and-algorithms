'use strict';

const HashTable = require('./hashtable');

let hashtable = new HashTable(1021);

describe('Hash Table Class Test', ()=>{
  it('Should Add a key/value to your hashtable results in the value being in the data structure', ()=>{
    hashtable.add('john', 'New York');
    expect(hashtable.table.length).toEqual(1021);
    expect(hashtable.table[877].head.value).toEqual({'john' : 'New York'});
  });
  it('Should  be Retrieving based on a key returns the value stored', ()=>{
    hashtable.add('john', 'New York');
    hashtable.add('Ahmad', 'jaddah');
    hashtable.add('omar', 'Amman');
    hashtable.add('waleed', 'Amman');
    expect(hashtable.get('Ahmad')).toEqual('jaddah');
    expect(hashtable.get('omar')).toEqual('Amman');
  });
  it('Should  be Retrieving based on a key returns the value stored', ()=>{
    expect(hashtable.get('Ahmad')).toEqual('jaddah');
    expect(hashtable.get('omar')).toEqual('Amman');
  });
  it('Should  Successfully returns null for a key that does not exist in the hashtable', ()=>{
    expect(hashtable.get('Faris')).toBeNull();
  });
  it('Should Successfully handle a collision within the hashtable', ()=>{
    expect(hashtable.table[877].head.value).toEqual({'omar': 'Amman'});
    expect(hashtable.table[877].head.next.value).toEqual({'john' : 'New York'});
  });
  it('Should Successfully retrieve a value from a bucket within the hashtable that has a collision', ()=>{
    expect(hashtable.get('omar')).toEqual('Amman');
    expect(hashtable.get('john')).toEqual('New York');
  });
  it('Should Successfully hash a key to an in-range value', ()=>{
    let hashed = hashtable.hash('ameen');
    expect(hashed < 1021).toBeTruthy();
  });
});
