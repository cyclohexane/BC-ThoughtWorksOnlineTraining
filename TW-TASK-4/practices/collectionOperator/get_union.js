'use strict';

function get_union(collection_a, collection_b) {
  let collection = collection_a;
  for(let i of collection_b){
    if(collection.indexOf(i) == -1){
      collection.push(i);
    }
  }
  return collection;
}

module.exports = get_union;

