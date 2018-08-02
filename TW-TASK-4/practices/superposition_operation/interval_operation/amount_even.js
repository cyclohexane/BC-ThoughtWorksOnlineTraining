'use strict';

function amount_even(collection) {
  let sum = 0;
  while(collection.length){
    let i = collection.shift();
    if(i%2 == 0){
      sum += i;
    }
  }
  return sum;
}

module.exports = amount_even;
