'use strict';

function calculate_elements_sum(collection, element) {
  let i = collection.length-1;
  while(collection.length){
    if(element === collection.pop()){
      break;
    }
    i--;
  }
  return (i);
}

module.exports = calculate_elements_sum;
