'use strict';

function hybrid_operation(collection) {
  let sum = 0;
  while(collection.length){
    sum += (collection.shift()*3+2);
  }
  return sum;
}

module.exports = hybrid_operation;

