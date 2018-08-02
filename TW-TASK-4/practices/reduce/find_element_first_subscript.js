'use strict';

function calculate_elements_sum(collection, element) {
  let i = 0;
  while(collection.length){
    if(element === collection.shift()){
      break;
    }
    i++;
  }
  return i;
}

module.exports = calculate_elements_sum;

