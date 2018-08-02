'use strict';

function choose_common_elements(collection_a, collection_b) {
  let result = [];
//    collection_a.find(a=>{
//    collection_b.find(b=>{
//      if (a === b){
//        result.push(a);
  result = collection_a.filter(i=>collection_b.indexOf(i) != -1);
//      }
//    });
//  });

  return result;
}

module.exports = choose_common_elements;
