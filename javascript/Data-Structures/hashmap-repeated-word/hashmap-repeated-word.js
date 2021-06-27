'use strict';

const HashTable = require('../Hashtable/hashtable');

function repeatedWord(inString){
  const arr=inString.split(/\W+/g);
  //   console.log('ARRRR',arr);
  let hashString = new HashTable(arr.length);
  //   console.log('HASH-STRING', hashString);

  for(let i=0; i < arr.length; i++){
    let word = arr[i].toLowerCase();
    // console.log('WORD', word);
    if(hashString.get(word) === word ){
      return hashString.get(word);
    }
    hashString.add(word, word);
  }
  return 'There is no duplicates in the String';
}

module.exports = repeatedWord;
