'use strict';

function hybrid_operation_to_uneven(collection) {
  let result = [];
  while(collection.length){
    let i = collection.shift();
    if(i%2 != 0){
    result.push(i*3+2);
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

