'use strict';

function average_uneven(collection) {
  let sum = 0;
  let uneven = 0;
  for(let i = 0;i<collection.length;i++){
    if(collection[i]%2 != 0){
      uneven += 1;
      sum += collection[i];
    }
  }
  return (Math.ceil(sum/uneven));
}

module.exports = average_uneven;
