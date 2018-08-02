'use strict';

function collect_min_number(collection) {
  let min = collection[0];
  for(let i = 0;i<collection.length;i++){
    if(min > collection[i]){
      min = collection[i];
    }
  }
  return min;
}

module.exports = collect_min_number;

