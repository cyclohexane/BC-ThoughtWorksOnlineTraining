'use strict';

function find_last_even(collection) {
  while(collection.length){
    let i = collection.pop();
    if(i%2 == 0){
      return i;
      break;
    }
  }
}

module.exports = find_last_even;
