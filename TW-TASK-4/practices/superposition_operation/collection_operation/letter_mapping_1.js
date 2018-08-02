'use strict';

function even_to_letter(collection) {
  let result = [];
  while(collection.length){
    let i = collection.shift();
    if(i%2 == 0){
    result.push(String.fromCharCode(i+96));
    }
  }
  return result;
}

module.exports = even_to_letter;
