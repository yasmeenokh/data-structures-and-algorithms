const HashTable = require('../Hashtable/hashtable');
const BinaryTree = require('../tree/tree');

function treeIntersection(tree1, tree2) {
  let results = [];

  const hashtable = new HashTable(1024);

  const treeOne = tree1.inOrder();
  const treeTwo = tree2.inOrder();

  for(let i=0; i < treeOne.length; i++){

    if (!hashtable.contains(treeOne[i].toString())) {
      hashtable.add(treeOne[i].toString(), treeOne[i]);
    }
  }
  for(let i=0;i< treeTwo.length; i++){
    if (hashtable.contains(treeTwo[i].toString())) {
      results.push(treeTwo[i]);
    }
  }
  if(results.length <= 0){
    return 'The Trees Are Not Intersected';
  } else return results;
}

module.exports = treeIntersection;
