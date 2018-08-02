'use strict';

function hybrid_operation_to_uneven(collection) {
  let sum = 0;
  while(collection.length){
    let i = collection.shift();
    if(i%2 != 0){
    sum += (i*3+5);
    }
  }
  return sum;
}

module.exports = hybrid_operation_to_uneven;

