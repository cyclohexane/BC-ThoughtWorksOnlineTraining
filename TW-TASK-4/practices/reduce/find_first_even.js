'use strict';

function find_first_even(collection) {
  while(collection.length){
    let i = collection.shift();
    if(i%2 == 0){
      return i;
      break;
    }
  }
}

module.exports = find_first_even;

