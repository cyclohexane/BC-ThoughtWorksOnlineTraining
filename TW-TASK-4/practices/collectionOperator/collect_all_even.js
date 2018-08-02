'use strict';

function collect_all_even(collection) {
  let even = [];
  for(let i of collection){
    if(i%2 == 0){
      even.push(i);
    }
  }
  return even;
}

module.exports = collect_all_even;
