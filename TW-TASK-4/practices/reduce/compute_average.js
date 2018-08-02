'use strict';

function compute_average(collection) {
  let sum = 0;
  for(let i = 0;i < collection.length;i++){
    sum += collection[i];
  }
  return (sum/collection.length);                 //原来是要加括号的...
}

module.exports = compute_average;

