'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result = [];
  while(collection_a.length){
    let i = collection_a.shift();
    for(let x = 0;x<collection_b.length;x++){
      if(i%collection_b[x] == 0){
        result.push(i);
        break;
      }
    }
  }
  return result;
}

module.exports = choose_divisible_integer;
