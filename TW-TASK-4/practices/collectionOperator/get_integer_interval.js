'use strict';

function get_integer_interval(number_a, number_b) {
  let collection = [];
  if(number_a < number_b){
    for(let i = number_a;i <= number_b;i++){
      collection.push(i);
    }
  }else if(number_a > number_b){
    for(let i = number_a;i >= number_b;i--){
      collection.push(i);
    }
  }else{
    collection.push(number_a);
  }
  return collection;
}

module.exports = get_integer_interval;

