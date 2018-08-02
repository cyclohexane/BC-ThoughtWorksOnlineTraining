'use strict';

function collect_max_number(collection) {
  let max = collection[0];
  for(let i = 0;i<collection.length;i++){
    if(max < collection[i]){
      max = collection[i];
    }
  }
  return max;
}

module.exports = collect_max_number;

