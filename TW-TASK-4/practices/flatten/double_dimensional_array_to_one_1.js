'use strict';

function double_to_one(collection) {
  let result = [];
  collection.find(i=>{
    result = result.concat(i);
  });
  return result;
}

module.exports = double_to_one;
