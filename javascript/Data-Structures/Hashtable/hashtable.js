const LinkedList = require('../linked-list/linked-list');


class HashTable {
  constructor(size){
    this.size = size;
    this.table = new Array(size);
  }
  hash(key){
    let hash = key.split('').reduce((result, n)=>{
      // console.log("result", result)
      // console.log("NNNN",n)
      // console.log("charCode",n.charCodeAt(0))
      return result + n.charCodeAt(0);
    },0) * 599 % this.size;
    return hash;
  }
  add(key, value){
    let hash = this.hash(key);
    if(!this.table[hash]){
      this.table[hash] = new LinkedList();
    }
    let keyValuePair = { [key] : value};
    this.table[hash].insert(keyValuePair);
    // console.log('TABLE : ',this.table);
  }
  contains(key){
    let hash = this.hash(key);
    return this.table[hash] ? true : false;

  }
  get(key){
    let hash = this.hash(key);
    if(this.contains(key)){
      if(this.table[hash].head){
        let current = this.table[hash].head;
        if(Object.keys(current.value)[0]=== key) return current.value[key];
        while(current.next){
          current = current.next;
          if(Object.keys(current.value)[0]=== key) return current.value[key];
        }
      }
    }
    return null;
  }
}

module.exports = HashTable;
