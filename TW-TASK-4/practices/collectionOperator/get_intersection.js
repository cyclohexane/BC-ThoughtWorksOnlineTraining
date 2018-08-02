'use strict';

function get_intersection(collection_a, collection_b) {
  let collection = [];
  while(collection_b.length){
    let b = collection_b.shift();
    for(let a of collection_a){
      if(a === b){
         collection.push(a);
      }
    }
  }
  return collection;
}

module.exports = get_intersection;
