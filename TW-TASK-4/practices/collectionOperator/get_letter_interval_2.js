'use strict';

function get_letter_interval_2(number_a, number_b) {
  //另一种方法是把26个字母作为一个字符串，根据下标取出
  let collection = [];
  if(number_a <= number_b){
    for(let i = number_a;i <= number_b;i++){
      if(i<=26){
        collection.push(String.fromCharCode(i+96));
      }else{
        let remainder = i%26;
        let multiple = (i-remainder)/26;
        if(remainder != 0){
          collection.push(String.fromCharCode(multiple+96)+String.fromCharCode(remainder+96));
        }else{
          collection.push(String.fromCharCode(multiple-1+96)+'z');  //*
        }
      }
    }
  }else{
    return get_letter_interval_2(number_b,number_a).reverse();
  }
  return collection;
}

module.exports = get_letter_interval_2;

