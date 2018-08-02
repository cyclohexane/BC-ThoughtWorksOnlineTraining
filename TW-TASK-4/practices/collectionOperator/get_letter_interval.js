'use strict';

function get_letter_interval(number_a, number_b) {
  let collection = [];
  if(number_a <= number_b){
    for(let i = number_a;i <= number_b;i++){
      collection.push(String.fromCharCode(i+96));
    }
  }else{
    return get_letter_interval(number_b,number_a).reverse();      //*
  }
  return collection;
}

module.exports = get_letter_interval;
