'use strict';

function leftJoin (table1,table2){
  let results = [];

  for (let i = 0; i <= table1.table.length -1; i++) {
    if(table1.table[i]){
      let keys = [Object.keys(table1.table[i].head.value)[0]][0];
      // console.log("KEYS", keys)
      let keyValue = [Object.values(table1.table[i].head.value)[0]][0];
      // console.log("KEYVALUES", keyValue)
      results.push([keys, keyValue]);
      // console.log("RESULTS1", results)
      if(table1.table[i].head.next){
        let nxt = table1.table[i].head.next;
        while(nxt){
          let keys = [Object.keys(nxt.value)[0]][0];
          // console.log("nextKEY", keys)
          let keyValue = [Object.values(nxt.value)[0]][0];
          // console.log("nextVALUE", keyValue);
          results.push([keys, keyValue]);
          // console.log('RESULTS2===', results)
          nxt = nxt.next;
        }}}}

  for(let i = 0 ; i < results.length; i++){
    let antonym = table2.get(results[i][0]);
    results[i].push(antonym);
  }
  if(results.length === 0){
    return null;
  } else return results;

}
module.exports = leftJoin;
