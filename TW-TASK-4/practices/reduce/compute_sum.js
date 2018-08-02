'use strict';

function calculate_elements_sum(collection) {
  let sum = 0;
  for(let i = 0;i < collection.length;i++){
    sum += collection[i];
  }
  return sum;
}

module.exports = calculate_elements_sum;

